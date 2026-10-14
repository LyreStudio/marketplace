// MIT: Lyre integration. Page events never submit a native form in the preview sandbox.
document.addEventListener('click', e => {const b=e.target.closest('button[data-lyre-submit]');if(b){e.preventDefault();b.closest('form').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));}},true);
document.addEventListener('keydown', e => {if(e.key==='Enter' && e.target.closest('form') && e.target.tagName!=='TEXTAREA'){e.preventDefault();e.target.closest('form').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));}},true);
document.addEventListener('submit',e=>e.preventDefault(),true);
