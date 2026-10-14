const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const sizeDisplay = document.getElementById('size');
let size = 10;
let activePointer = null;
let previous;
const position = event => { const rect = canvas.getBoundingClientRect(); return { x: (event.clientX - rect.left) * canvas.width / rect.width, y: (event.clientY - rect.top) * canvas.height / rect.height }; };
function dot(point) { context.fillStyle = document.getElementById('color').value; context.beginPath(); context.arc(point.x, point.y, size / 2, 0, Math.PI * 2); context.fill(); }
canvas.addEventListener('pointerdown', event => { if (activePointer !== null || event.button !== 0) return; activePointer = event.pointerId; canvas.setPointerCapture(activePointer); previous = position(event); dot(previous); });
canvas.addEventListener('pointermove', event => { if (event.pointerId !== activePointer) return; const next = position(event); context.strokeStyle = document.getElementById('color').value; context.lineWidth = size; context.lineCap = 'round'; context.beginPath(); context.moveTo(previous.x, previous.y); context.lineTo(next.x, next.y); context.stroke(); previous = next; });
const end = event => { if (event.pointerId === activePointer) { activePointer = null; previous = null; } };
for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.addEventListener(type, end);
document.getElementById('increase').addEventListener('click', () => { size = Math.min(50, size + 5); sizeDisplay.textContent = size; });
document.getElementById('decrease').addEventListener('click', () => { size = Math.max(5, size - 5); sizeDisplay.textContent = size; });
const clearDialog = document.getElementById('clear-dialog');
document.getElementById('clear').addEventListener('click', () => clearDialog.showModal());
document.getElementById('cancel-clear').addEventListener('click', () => clearDialog.close());
document.getElementById('confirm-clear').addEventListener('click', () => { context.clearRect(0, 0, canvas.width, canvas.height); clearDialog.close(); document.getElementById('status').textContent = 'Canvas cleared.'; });
document.getElementById('save').addEventListener('click', () => { const link = document.createElement('a'); link.download = 'drawing.png'; link.href = canvas.toDataURL('image/png'); link.click(); document.getElementById('status').textContent = 'PNG download requested. Keep the file to save your drawing.'; });
