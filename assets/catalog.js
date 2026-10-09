// Carga data/productos.json y dibuja la lista de productos en el idioma
// de la página actual. Cada producto trae textos por idioma y un link de
// afiliado que se completa cuando la cuenta de afiliado esté aprobada.
(function () {
  const lang = document.documentElement.lang || 'es';
  const list = document.querySelector('.catalog-list');
  if (!list) return;

  fetch('../data/productos.json')
    .then((r) => r.json())
    .then((productos) => {
      productos.forEach((p, i) => {
        const t = p.i18n[lang] || p.i18n.es;
        const el = document.createElement('div');
        el.className = 'item';
        const num = String(i + 1).padStart(2, '0');
        const href = p.affiliate_url || '#';
        const disabled = !p.affiliate_url;
        el.innerHTML = `
          <span class="num">${num}</span>
          <div class="info"><h3>${t.nombre}</h3><p>${t.descripcion}</p></div>
          <a class="buy" href="${href}" ${disabled ? 'aria-disabled="true"' : 'target="_blank" rel="nofollow sponsored noopener"'}>${t.cta}</a>
        `;
        list.appendChild(el);
      });
    })
    .catch(() => {
      list.innerHTML = '<p>No se pudo cargar el catálogo por ahora.</p>';
    });
})();
