(() => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('menu');

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    menu.classList.toggle('open', !open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // No backend yet: forms open the visitor's email client with the details pre-filled.
  // Replace with a form service (e.g. Formspree) or an API endpoint when available.
  const TO = 'hello@kiviatech.com';
  document.querySelectorAll('form[data-subject]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const body = [...data.entries()].map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`).join('\n');
      window.location.href = `mailto:${TO}?subject=${encodeURIComponent(form.dataset.subject)}&body=${encodeURIComponent(body)}`;
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
