document.addEventListener('click', async (event) => {
  const button = event.target.closest('button[data-copy]');
  if (!button) return;
  const details = button.closest('details');
  const status = details.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    status.textContent = 'Original source URL copied. Follow the setup guide to add Lyre support.';
  } catch {
    const input = details.querySelector('input');
    input.focus(); input.select();
    status.textContent = 'Copy the selected source URL. Follow the setup guide to add Lyre support.';
  }
});

const search = document.querySelector('#project-search');
search?.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase();
  const cards = [...document.querySelectorAll('article.template')];
  for (const card of cards) card.hidden = !card.dataset.search.includes(query);
  const count = cards.filter(card => !card.hidden).length;
  document.querySelector('#project-count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}${count === 0 ? '. Try another search.' : ''}`;
});
