import KanbanAPI from './js/api/KanbanAPI.js';
export function addActions(item,id){
 const actions=document.createElement('div');actions.className='task-actions';
 const select=document.createElement('select');select.setAttribute('aria-label','Move task');
 for(const [value,label] of [[0,'Move task…'],[1,'Not Started'],[2,'In Progress'],[3,'Completed']]){const option=document.createElement('option');option.value=value;option.textContent=label;select.append(option);}
 select.addEventListener('change',()=>{const columnId=Number(select.value);if(!columnId)return;KanbanAPI.updateItem(id,{columnId,position:KanbanAPI.getItems(columnId).length});document.querySelector(`.kanban__column[data-id="${columnId}"] .kanban__column-items`).append(item.elements.root);select.value='0';});
 const remove=document.createElement('button');remove.textContent='Delete task';remove.addEventListener('click',()=>{if(actions.querySelector('.delete-question'))return;const question=document.createElement('span');question.className='delete-question';question.textContent='Delete this task? ';for(const name of ['Cancel','Delete now']){const b=document.createElement('button');b.textContent=name;b.addEventListener('click',()=>{if(name==='Delete now'){KanbanAPI.deleteItem(id);item.elements.root.remove();}question.remove();});question.append(b);}actions.append(question);});
 actions.append(select,remove);item.elements.root.append(actions);
}
