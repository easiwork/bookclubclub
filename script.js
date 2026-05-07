const posterGrid = document.querySelector('#poster-grid');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function loadPosters() {
  try {
    const response = await fetch('posters/manifest.json', { cache: 'no-cache' });
    if (!response.ok) return;
    const posters = await response.json();
    if (!Array.isArray(posters) || posters.length === 0) return;

    posterGrid.innerHTML = posters.map((poster) => {
      const src = `posters/${encodeURIComponent(poster.file)}`;
      const alt = escapeHtml(poster.alt || 'Book Club Club poster');
      return `<img src="${src}" alt="${alt}" loading="lazy" />`;
    }).join('');
  } catch {
    // Keep the placeholder if the manifest is absent or malformed.
  }
}

loadPosters();
