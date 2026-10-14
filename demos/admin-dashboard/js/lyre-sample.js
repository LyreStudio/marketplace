// Forms in this static template are examples; no data is sent or stored.
document.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = event.target.querySelector('[data-template-status]');
  if (status) status.textContent = 'Sample form only. Connect your own service before publishing.';
});
