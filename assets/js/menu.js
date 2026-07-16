/**
 * NicaGame – Mobile Navigation
 * Hamburger toggle + cierre al clickear fuera
 */

(function () {
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu   = document.getElementById('mobile-nav');
  const overlay   = document.getElementById('nav-overlay');

  function openMenu() {
    hamburger.classList.add('is-active');
    navMenu.classList.add('is-open');
    overlay.classList.add('is-visible');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    hamburger.classList.remove('is-active');
    navMenu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.classList.remove('no-scroll');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.contains('is-active') ? closeMenu() : openMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  /* Submenús móviles: toggle al tocar el ítem */
  const navItems = document.querySelectorAll('.navbar__item');
  navItems.forEach(function (item) {
    const link = item.querySelector('.navbar__link');
    const sub  = item.querySelector('.navbar__submenu');

    if (link && sub) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth < 992) {
          e.preventDefault();
          const isOpen = item.classList.contains('submenu-open');
          // Cierra todos los demás
          navItems.forEach(function (ni) { ni.classList.remove('submenu-open'); });
          if (!isOpen) item.classList.add('submenu-open');
        }
      });
    }
  });

  /* Cierra menú al redimensionar a desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 992) closeMenu();
  });
})();
