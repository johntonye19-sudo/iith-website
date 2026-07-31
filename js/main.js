/**
 * IITH Yenagoa Website - Main JavaScript
 * Handles theme toggle, mobile menu, header scroll effects, and accessibility
 */
(function () {
  'use strict';

  try {
    var html = document.documentElement;
    var themeToggle = document.getElementById('theme-toggle');

    function initTheme() {
      try {
        var stored = null;
        try { stored = localStorage.getItem('iith-theme'); } catch (e) {}
        var prefersDark = false;
        try { prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; } catch (e) {}
        if (stored === 'dark' || (!stored && prefersDark)) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
      } catch (e) {}
    }

    function toggleTheme() {
      try {
        html.classList.toggle('dark');
        try {
          localStorage.setItem('iith-theme', html.classList.contains('dark') ? 'dark' : 'light');
        } catch (e) {}
      } catch (e) {}
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    initTheme();

    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', function () {
        var isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', String(!isOpen));
        mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      });

      var links = mobileMenu.querySelectorAll('a');
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
      }
    }

    var header = document.getElementById('header');
    if (header) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 80) {
          header.classList.add('shadow-md');
        } else {
          header.classList.remove('shadow-md');
        }
      }, { passive: true });
    }

    if (typeof IntersectionObserver !== 'undefined') {
      var revealObserver = new IntersectionObserver(function (entries) {
        for (var j = 0; j < entries.length; j++) {
          var entry = entries[j];
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            revealObserver.unobserve(entry.target);
          }
        }
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      var cards = document.querySelectorAll('.feature-card, .content-card');
      for (var k = 0; k < cards.length; k++) {
        cards[k].classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700');
        revealObserver.observe(cards[k]);
      }
    }

    var yearEls = document.querySelectorAll('[data-year]');
    for (var m = 0; m < yearEls.length; m++) {
      yearEls[m].textContent = new Date().getFullYear();
    }
  } catch (e) {
    // Silently fail — site remains usable without JS enhancements
  }
})();
