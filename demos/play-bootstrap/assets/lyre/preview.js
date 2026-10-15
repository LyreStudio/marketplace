// SPDX-License-Identifier: MIT; Copyright 2026 Lyre Studio
const toast=document.querySelector('.sample-toast');let toastTimer;
function note(message){toast.textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.textContent='',5000);}
function sampleForm(form){const feedback=form.querySelector('.sample-feedback');const inputs=[...form.querySelectorAll('input,textarea')];const invalid=inputs.find(input=>!input.value.trim()||(input.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)));
 if(invalid){feedback.textContent='Complete the sample fields and enter a valid email address.';invalid.setAttribute('aria-invalid','true');invalid.focus();return;}
 inputs.forEach(input=>input.removeAttribute('aria-invalid'));feedback.textContent=form.dataset.formKind==='Login'?'Sample login only. No account was accessed and nothing was sent or saved.':form.dataset.formKind==='Newsletter'?'Sample signup only. No subscription was created and nothing was sent or saved.':'Sample message only. Nothing was sent or saved.';
}
document.addEventListener('click',event=>{
 const submit=event.target.closest('[data-sample-submit]');if(submit){event.preventDefault();sampleForm(submit.closest('form'));return;}
 const collapse=event.target.closest('[data-bs-toggle="collapse"]');if(collapse){event.preventDefault();const target=document.querySelector(collapse.dataset.bsTarget);if(target){const open=target.classList.toggle('show');collapse.classList.toggle('collapsed',!open);collapse.setAttribute('aria-expanded',String(open));}return;}
 const anchor=event.target.closest('a');if(!anchor)return;
 if(anchor.closest('.nav-item-has-children')&&anchor.parentElement.classList.contains('nav-item-has-children'))return;
 if(anchor.hasAttribute('data-sample-action')){event.preventDefault();note('Sample link. Connect your own destination when editing this template.');return;}
 const href=anchor.getAttribute('href');if(href?.startsWith('#')){const target=document.getElementById(href.slice(1));if(target){event.preventDefault();target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});history.replaceState(null,'',href);}}
});
document.addEventListener('submit',event=>{event.preventDefault();sampleForm(event.target);});
document.addEventListener('keydown',event=>{if(event.key==='Enter'&&event.target.closest('form')&&event.target.tagName!=='TEXTAREA'){event.preventDefault();sampleForm(event.target.closest('form'));}});
document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button=>{button.setAttribute('aria-controls',button.dataset.bsTarget.slice(1));button.setAttribute('aria-expanded',String(document.querySelector(button.dataset.bsTarget)?.classList.contains('show')));});
document.querySelectorAll('a').forEach(anchor=>{if(!anchor.textContent.trim()&&anchor.querySelector('i'))anchor.setAttribute('aria-label','Sample social link');});
