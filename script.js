/* ========================================
   ECOSSISTEMA DA PESQUISA CIENTÍFICA
   Global Interactive Logic
   ======================================== */
(function () {
  'use strict';

  var SEARCH_INDEX = window.SEARCH_INDEX || [
    { title: 'Página inicial', module: 'Hub principal', url: 'index.html', keywords: 'início home ecossistema pesquisa científica módulos roadmap glossário' },
    { title: 'Glossário técnico', module: 'Referência', url: 'glossario.html', keywords: 'glossário termos peer review preprint osf prisma qualis' },
    { title: 'Roadmap da pesquisa', module: 'Referência', url: 'roadmap.html', keywords: 'roadmap jornada etapas projeto pesquisa redação submissão publicação' },
    { title: 'Fundamentos da Ciência', module: 'F0 · Alicerces', url: 'modulos/fundamentos.html', keywords: 'ciência fundamentos epistemologia qualitativa quantitativa revisão sistemática' },
    { title: 'Método Científico', module: 'F1 · Alicerces', url: 'modulos/metodo-cientifico.html', keywords: 'método científico hipótese variáveis indução dedução experimento' },
    { title: 'Planejamento da Pesquisa', module: 'F4 · Planejamento', url: 'modulos/planejamento.html', keywords: 'planejamento problema pergunta picos objetivos preregistro critérios inclusão exclusão' },
    { title: 'Escrita Científica', module: 'F8 · Comunicação', url: 'modulos/escrita.html', keywords: 'escrita científica imrad resumo abstract metodologia discussão referências abnt apa vancouver' },
    { title: 'Publicação Científica', module: 'F9 · Comunicação', url: 'modulos/publicacao.html', keywords: 'publicação científica peer review double blind open access ojs cover letter preprint' },
    { title: 'Submissão de Manuscritos', module: 'F19 · Comunicação', url: 'modulos/submissao.html', keywords: 'submissão manuscrito checklist sistema editorial revisão resposta pareceristas' },
    { title: 'Modelo Brasileiro de Publicação', module: 'F18 · Nacional', url: 'modulos/modelo-brasileiro.html', keywords: 'qualis scielo redalyc capes acesso aberto diamante brasil periódicos' }
  ];

  var mainNav = document.getElementById('mainNav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var backToTop = document.getElementById('backToTop');
  var globalLevelBtns = document.querySelectorAll('.level-btn');
  var searchInput = document.getElementById('globalSearch');
  var searchResults = document.getElementById('searchResults');
  var ticking = false;

  function closeMobileNav() {
    if (!navLinks || !navToggle) return;
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function initNavigation() {
    if (navToggle && navLinks) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMobileNav);
      });
    }

    if (backToTop) {
      backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  function updateActiveSidebar() {
    var links = document.querySelectorAll('.sidebar-link');
    if (!links.length) return;

    var scrollPos = window.scrollY + 140;
    var active = null;

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.charAt(0) !== '#') return;
      var target = document.querySelector(href);
      if (target && target.offsetTop <= scrollPos) {
        active = link;
      }
    });

    links.forEach(function (link) {
      link.classList.remove('active');
    });

    if (active) {
      active.classList.add('active');
    }
  }

  function updateHomeSectionNav() {
    var navAnchors = navLinks ? navLinks.querySelectorAll('a[href^="#"]') : [];
    if (!navAnchors.length) return;

    var sections = ['blocos', 'roadmap'];
    var scrollPos = window.scrollY + 180;
    var activeId = '';

    sections.forEach(function (id) {
      var section = document.getElementById(id);
      if (section && scrollPos >= section.offsetTop) {
        activeId = id;
      }
    });

    navAnchors.forEach(function (anchor) {
      anchor.classList.toggle('active', anchor.getAttribute('href') === '#' + activeId);
    });
  }

  function updateScroll() {
    ticking = false;
    var y = window.scrollY;

    if (mainNav) {
      mainNav.classList.toggle('scrolled', y > 20);
    }

    if (backToTop) {
      backToTop.classList.toggle('visible', y > 400);
    }

    updateActiveSidebar();
    updateHomeSectionNav();
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }

  function setAllConceptLevels(level) {
    document.querySelectorAll('.concept').forEach(function (concept) {
      concept.querySelectorAll('.concept-level-tab').forEach(function (tab) {
        tab.classList.toggle('active', tab.getAttribute('data-level') === level);
      });

      concept.querySelectorAll('.concept-level-panel').forEach(function (panel) {
        panel.classList.toggle('active', panel.getAttribute('data-level') === level);
      });
    });
  }

  function initLevels() {
    if (!globalLevelBtns.length) return;

    var savedLevel = localStorage.getItem('ecossistema-level') || '2';

    globalLevelBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-level') === savedLevel);
      btn.addEventListener('click', function () {
        var level = this.getAttribute('data-level');
        globalLevelBtns.forEach(function (button) {
          button.classList.remove('active');
        });
        this.classList.add('active');
        setAllConceptLevels(level);
        localStorage.setItem('ecossistema-level', level);
      });
    });

    if (document.querySelector('.concept')) {
      setAllConceptLevels(savedLevel);
    }

    document.addEventListener('click', function (event) {
      var tab = event.target.closest('.concept-level-tab');
      if (!tab) return;

      var concept = tab.closest('.concept');
      if (!concept) return;

      var level = tab.getAttribute('data-level');

      concept.querySelectorAll('.concept-level-tab').forEach(function (button) {
        button.classList.toggle('active', button === tab);
      });

      concept.querySelectorAll('.concept-level-panel').forEach(function (panel) {
        panel.classList.toggle('active', panel.getAttribute('data-level') === level);
      });
    });
  }

  function initAccordion() {
    document.addEventListener('click', function (event) {
      var header = event.target.closest('.accordion-header');
      if (!header) return;

      var item = header.closest('.accordion-item');
      if (!item) return;

      var container = item.parentElement;
      var isOpen = item.classList.contains('open');

      if (container) {
        container.querySelectorAll('.accordion-item.open').forEach(function (openItem) {
          openItem.classList.remove('open');
        });
      }

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  }

  function initReveal() {
    var elements = document.querySelectorAll('.concept, .block-card, .card, .roadmap-step, .glossary-term, .callout, .module-nav, .page-header, .hero, .table-wrapper');
    elements.forEach(function (element) {
      element.classList.add('reveal');
    });

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (element) {
        element.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal').forEach(function (element) {
      observer.observe(element);
    });
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    function animateCounter(element) {
      var target = parseInt(element.getAttribute('data-count'), 10);
      var duration = 1200;
      var start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.floor(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          element.textContent = target;
        }
      }

      requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animateCounter);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  function initSearch() {
    if (!searchInput || !searchResults) return;

    function hideResults() {
      searchResults.style.display = 'none';
      searchResults.innerHTML = '';
    }

    searchInput.addEventListener('input', function () {
      var query = this.value.trim().toLowerCase();

      if (query.length < 2) {
        hideResults();
        return;
      }

      var results = SEARCH_INDEX.filter(function (item) {
        var haystack = [item.title, item.module, item.keywords].join(' ').toLowerCase();
        return haystack.indexOf(query) !== -1;
      }).slice(0, 7);

      if (!results.length) {
        hideResults();
        return;
      }

      searchResults.innerHTML = results.map(function (result) {
        return '<a href="' + result.url + '" class="search-result-item">' +
          '<span class="search-result-title">' + result.title + '</span>' +
          '<span class="search-result-module">' + result.module + '</span>' +
        '</a>';
      }).join('');

      searchResults.style.display = 'block';
    });

    document.addEventListener('click', function (event) {
      if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        hideResults();
      }
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (event) {
        var targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;

        var target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });

        if (history.pushState) {
          history.pushState(null, '', targetId);
        }
      });
    });
  }

  function initGlossaryFilter() {
    var glossaryBtns = document.querySelectorAll('.glossary-filter-btn');
    if (!glossaryBtns.length) return;

    glossaryBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var letter = this.getAttribute('data-letter');

        glossaryBtns.forEach(function (button) {
          button.classList.remove('active');
        });
        this.classList.add('active');

        document.querySelectorAll('.glossary-term').forEach(function (term) {
          if (letter === 'all') {
            term.style.display = '';
            return;
          }

          var termLetter = (term.getAttribute('data-letter') || '').toLowerCase();
          term.style.display = termLetter === letter.toLowerCase() ? '' : 'none';
        });
      });
    });
  }

  function init() {
    initNavigation();
    initLevels();
    initAccordion();
    initReveal();
    initCounters();
    initSearch();
    initSmoothScroll();
    initGlossaryFilter();
    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
