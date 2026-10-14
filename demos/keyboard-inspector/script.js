const insert = document.getElementById('insert');
window.addEventListener('keydown',event=>{
 insert.replaceChildren();
 for(const [label,value] of [['event.key',event.key===' '?'Space':event.key],['event.keyCode',event.keyCode],['event.code',event.code]]){
  const item=document.createElement('div');item.className='key';item.append(document.createTextNode(String(value)));const small=document.createElement('small');small.textContent=label;item.append(small);insert.append(item);
 }
});
