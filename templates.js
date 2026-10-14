document.addEventListener('click', async (event) => {
  const button = event.target.closest('button[data-copy]');
  if (!button) return;
  const details = button.closest('details');
  const status = details.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    status.textContent = 'Clone URL copied. Paste it in Lyre → Add project → Clone repository.';
  } catch {
    const input = details.querySelector('input');
    input.focus(); input.select();
    status.textContent = 'Copy the selected URL, then paste it in Lyre → Add project → Clone repository.';
  }
});
