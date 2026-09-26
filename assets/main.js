const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Keep the reader in the same section when switching between page languages.
document.querySelectorAll('a[data-lang-switch]').forEach(link => {
  link.addEventListener('click', event => {
    if (!window.location.hash || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.location.href = link.href + window.location.hash;
  });
});

// Keep motion optional: the original page remains fully visible without JS or IntersectionObserver.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reduceMotion.matches) {
  const revealTargets = document.querySelectorAll([
    '.hero-copy', '.hero-art', '.hero-foot',
    '.detail-hero > .eyebrow', '.detail-hero > h1', '.detail-hero > .lead',
    '.detail-hero > .tag-row', '.detail-hero > nav',
    '.section .eyebrow', '.section h2', '.section .body-large',
    '.about-photo', '.about-facts', '.timeline-card',
    '.experience-grid > .card', '.skill-grid > div',
    '.featured', '.upcoming', '.pipeline > span',
    '.tai-process > div', '.tai-facts > div', '.tai-info-card',
    '.result-table-wrap', '.resume-row', '.contact-links'
  ].join(', '));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 48px 0px' });

    revealTargets.forEach((element, index) => {
      // A small per-row delay adds rhythm without holding up the page.
      const siblings = Array.from(element.parentElement.children);
      const rowIndex = siblings.indexOf(element);
      element.style.setProperty('--reveal-delay', `${Math.min(Math.max(rowIndex, 0), 3) * 65}ms`);
      element.classList.add('motion-reveal');
      revealObserver.observe(element);
    });
  }
}

// The thin top line tracks page position without changing document layout.
let scrollQueued = false;
function updateScrollProgress() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const progress = distance > 0 ? window.scrollY / distance : 0;
  document.documentElement.style.setProperty('--scroll-progress', Math.min(1, Math.max(0, progress)));
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (scrollQueued) return;
  scrollQueued = true;
  requestAnimationFrame(updateScrollProgress);
}, { passive: true });
window.addEventListener('resize', updateScrollProgress, { passive: true });
updateScrollProgress();
