/* ========================================
   MANUAL DO PESQUISADOR — Interactive Logic
   Navigation, Accordion, Scroll Reveal
   ======================================== */

(function () {
  'use strict';

  // ===== DOM References =====
  const mainNav = document.getElementById('mainNav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const backToTop = document.getElementById('backToTop');
  const navAnchors = document.querySelectorAll('.nav-links a');

  // ===== Mobile Nav Toggle =====
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navAnchors.forEach(function (anchor) {
      anchor.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== Scroll: Nav Shadow & Active State =====
  var lastScrollY = 0;
  var ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }

  function updateScroll() {
    ticking = false;

    // Nav shadow
    if (mainNav) {
      if (lastScrollY > 20) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTop) {
      if (lastScrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    // Active nav link
    updateActiveNav();
  }

  function updateActiveNav() {
    var sections = document.querySelectorAll('.module-section, .modules-overview');
    var scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height && id) {
        navAnchors.forEach(function (a) {
          a.classList.remove('active');
          if (a.getAttribute('href') === '#' + id) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ===== Back to Top =====
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== Accordion =====
  var toolHeaders = document.querySelectorAll('.tool-header');

  toolHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var item = this.closest('.tool-item');
      var isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.tool-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.tool-header').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===== Scroll Reveal (Intersection Observer) =====
  function initScrollReveal() {
    // Elements to reveal
    var revealSelectors = [
      '.module-header',
      '.content-block',
      '.module-card',
      '.research-type-card',
      '.objective-item',
      '.procedure-card',
      '.funnel-diagram',
      '.tool-item',
      '.component-card',
      '.comparison-card',
      '.osf-feature-box',
      '.system-card',
      '.why-box',
      '.qualis-tier',
      '.indexer-card',
      '.glossary-card',
      '.journals-table-wrapper'
    ];

    var elements = document.querySelectorAll(revealSelectors.join(', '));

    elements.forEach(function (el) {
      el.classList.add('reveal');
    });

    // Stagger groups
    var staggerSelectors = [
      '.modules-grid',
      '.research-types-grid',
      '.procedures-grid',
      '.indexers-grid',
      '.glossary-grid',
      '.components-grid',
      '.funnel-steps'
    ];

    staggerSelectors.forEach(function (sel) {
      var container = document.querySelector(sel);
      if (container) {
        container.classList.add('reveal-stagger');
        container.classList.add('reveal');
      }
    });

    // Observer
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
      });
    } else {
      // Fallback: show everything
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  // ===== Counter Animation =====
  function animateCounters() {
    var counters = document.querySelectorAll('[data-count]');

    if ('IntersectionObserver' in window) {
      var counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var target = parseInt(el.getAttribute('data-count'), 10);
            var duration = 1200;
            var startTime = null;

            function step(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease out cubic
              var ease = 1 - Math.pow(1 - progress, 3);
              el.textContent = Math.floor(ease * target);
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                el.textContent = target;
              }
            }

            requestAnimationFrame(step);
            counterObserver.unobserve(el);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(function (counter) {
        counterObserver.observe(counter);
      });
    } else {
      counters.forEach(function (counter) {
        counter.textContent = counter.getAttribute('data-count');
      });
    }
  }

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // ===== Init =====
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    animateCounters();
    // Trigger initial scroll check
    onScroll();
  });

  // If DOM is already loaded
  if (document.readyState !== 'loading') {
    initScrollReveal();
    animateCounters();
    onScroll();
  }
})();
