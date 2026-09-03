/**
 * Clean Air Costa Rica — Main JavaScript
 * Arquitectura modular y funcional
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initDynamicHeroText();
  initScrollAnimations();
});

/**
 * 1. Menú Hamburguesa para Móviles
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (event) => {
    if (!mobileNav.contains(event.target) && !toggleBtn.contains(event.target)) {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * 2. Texto Dinámico en el Hero (Efecto de Rotación)
 */
function initDynamicHeroText() {
  const dynamicElement = document.querySelector('.hero-dynamic');
  if (!dynamicElement) return;

  const phrases = [
    'Instalación Profesional',
    'Mantenimiento Preventivo',
    'Diagnóstico de Precisión',
    'Sistemas Inverter Eficientes'
  ];

  let currentIndex = 0;

  setInterval(() => {
    dynamicElement.classList.add('fade-out');

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      dynamicElement.textContent = phrases[currentIndex];
      dynamicElement.classList.remove('fade-out');
      dynamicElement.classList.add('fade-in');
    }, 400);

    setTimeout(() => {
      dynamicElement.classList.remove('fade-in');
    }, 800);
  }, 3500);
}

/**
 * 3. Animaciones al hacer Scroll (Reveal on Scroll)
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // Animación ejecutada una sola vez
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => observer.observe(el));
}
