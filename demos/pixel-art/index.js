import { Board } from './board.js';

const rows = 12;
const cols = 10;

let isMouseDown = false;
const boardElement = document.getElementById('board');

boardElement.addEventListener('pointerdown', function (event) {
  const target = event.target;
  if (target.classList.contains('palette')) {
    board.setColor(target.style.backgroundColor);
  } else if (target.classList.contains('box')) {
    target.style.backgroundColor = board.color;
  }

  isMouseDown = true;
});

boardElement.addEventListener('pointerover', function (event) {
  if (isMouseDown) {
    const target = event.target;
    if (target.classList.contains('box') && !target.classList.contains('palette')) {
      target.style.backgroundColor = board.color;
    }
  }
});

document.addEventListener('pointerup', function (event) {
  isMouseDown = false;
});

function setGridCSS(rows, cols) {
  boardElement.style.gridTemplateRows = `repeat(${rows}, min(28px,7.5vw))`;
  boardElement.style.gridTemplateColumns = `repeat(${cols}, min(28px,7.5vw))`;
}

const board = new Board(rows, cols);
board.setColor('#7764db');
const gridFragment = board.generateGrid();
boardElement.appendChild(gridFragment);
setGridCSS(rows + 1, cols);

const colorFragment = board.generateColorRow();
boardElement.appendChild(colorFragment);

boardElement.querySelectorAll('button').forEach((el,i)=>{el.setAttribute('aria-label',el.classList.contains('palette')?`Choose color ${i+1-rows*cols}`:`Paint pixel ${i+1}`);el.addEventListener('click',()=>{if(el.classList.contains('palette'))board.setColor(el.style.backgroundColor);else el.style.backgroundColor=board.color;});});
boardElement.addEventListener('pointermove',e=>{if(!isMouseDown)return;const el=document.elementFromPoint(e.clientX,e.clientY);if(el?.classList.contains('box')&&!el.classList.contains('palette'))el.style.backgroundColor=board.color;});
document.addEventListener('pointercancel',()=>isMouseDown=false);
