import {read as safeRead,save as safeSave} from '../../storage.mjs';
export default class KanbanAPI {
	static getItems(columnId) {
		const column = read().find(column => column.id == columnId);

		if (!column) {
			return [];
		}

		return column.items;
	}

	static insertItem(columnId, content) {
		const data = read();
		const column = data.find(column => column.id == columnId);
		const item = {
			id: Math.max(0,...data.flatMap(c=>c.items.map(item=>item.id))) + 1,
			content
		};

		if (!column) {
			throw new Error("Column does not exist.");
		}

		column.items.push(item);
		save(data);

		return item;
	}

	static updateItem(itemId, newProps) {
		const data = read();
		const [item, currentColumn] = (() => {
			for (const column of data) {
				const item = column.items.find(item => item.id == itemId);

				if (item) {
					return [item, column];
				}
			}
		})() || [];

		if (!item) {
			throw new Error("Item not found.");
		}

		item.content = newProps.content === undefined ? item.content : newProps.content;

		// Update column and position
		if (
			newProps.columnId !== undefined
			&& newProps.position !== undefined
		) {
			const targetColumn = data.find(column => column.id == newProps.columnId);

			if (!targetColumn) {
				throw new Error("Target column not found.");
			}

			// Delete the item from it's current column
			currentColumn.items.splice(currentColumn.items.indexOf(item), 1);

			// Move item into it's new column and position
			targetColumn.items.splice(newProps.position, 0, item);
		}

		save(data);
	}

	static deleteItem(itemId) {
		const data = read();

		for (const column of data) {
			const item = column.items.find(item => item.id == itemId);

			if (item) {
				column.items.splice(column.items.indexOf(item), 1);
			}
		}

		save(data);
	}
}

function read() {
	const json = safeRead("lyre.kanban-board.v1", null, v => Array.isArray(v) && v.length===3 && v.every((c,i)=>c?.id===i+1 && Array.isArray(c.items) && c.items.length<10000 && c.items.every(item=>Number.isSafeInteger(item.id)&&item.id>0&&typeof item.content==="string")));

	if (!json) {
		return [
			{
				id: 1,
				items: []
			},
			{
				id: 2,
				items: []
			},
			{
				id: 3,
				items: []
			},
		];
	}

	return json;
}

function save(data) {
	safeSave("lyre.kanban-board.v1", data);
}
