/* ========================================
   ECOSSISTEMA DA PESQUISA CIENTÍFICA
   Global Interactive Logic
   ======================================== */
(function () {
  'use strict';

  var SEARCH_INDEX = window.SEARCH_INDEX || [
    { title: 'Página inicial', module: 'Hub principal', url: 'index.html', keywords: 'início home ecossistema pesquisa científica módulos roadmap glossário' },
    { title: 'Glossário técnico', module: 'Referência', url: 'glossario.html', keywords: 'glossário termos peer review preprint osf prisma qualis checklists editoriais repositório' },
    { title: 'Roadmap da pesquisa', module: 'Referência', url: 'roadmap.html', keywords: 'roadmap jornada etapas projeto pesquisa redação submissão publicação repositório preservação' },
    { title: 'Perguntas frequentes', module: 'Referência', url: 'faq.html', keywords: 'faq perguntas frequentes pesquisa científica prisma ia bibliometria submissão revisão sistemática desk reject parecerista periódico edital pré-registro lattes orcid' },
    { title: 'Checklists editoriais', module: 'Referência', url: 'checklists-editoriais.html', keywords: 'checklist editorial submissão pareceres revisão aceite prova publicação checklist revista manuscrito' },
    { title: 'Fundamentos da Ciência', module: 'F0 · Alicerces', url: 'modulos/fundamentos.html', keywords: 'ciência fundamentos epistemologia qualitativa quantitativa revisão sistemática' },
    { title: 'Método Científico', module: 'F1 · Alicerces', url: 'modulos/metodo-cientifico.html', keywords: 'método científico hipótese variáveis indução dedução experimento' },
    { title: 'Ética e Integridade Científica', module: 'F2 · Alicerces', url: 'modulos/etica-integridade.html', keywords: 'ética integridade científica plágio autoria conflito de interesse comitê de ética consentimento' },
    { title: 'Ciência Aberta', module: 'F3 · Planejamento', url: 'modulos/ciencia-aberta.html', keywords: 'ciência aberta preregistro pre-registro dados abertos materiais abertos transparência reprodutibilidade' },
    { title: 'Planejamento da Pesquisa', module: 'F4 · Planejamento', url: 'modulos/planejamento.html', keywords: 'planejamento problema pergunta picos objetivos preregistro critérios inclusão exclusão' },
    { title: 'Revisão da Literatura', module: 'F5 · Planejamento', url: 'modulos/revisao-literatura.html', keywords: 'revisão da literatura revisão sistemática narrativa integrativa escopo estratégia de busca prisma' },
    { title: 'Desenhos de Pesquisa', module: 'F6 · Execução', url: 'modulos/desenhos-pesquisa.html', keywords: 'desenhos de pesquisa transversal coorte ensaio clínico qualitativo validade interna externa' },
    { title: 'Estatística', module: 'F7 · Execução', url: 'modulos/estatistica.html', keywords: 'estatística p-valor intervalo de confiança tamanho de efeito inferência significância análise quantitativa' },
    { title: 'Escrita Científica', module: 'F8 · Comunicação', url: 'modulos/escrita.html', keywords: 'escrita científica imrad resumo abstract metodologia discussão referências abnt apa vancouver' },
    { title: 'Publicação Científica', module: 'F9 · Comunicação', url: 'modulos/publicacao.html', keywords: 'publicação científica peer review double blind open access ojs cover letter preprint' },
    { title: 'Revisão por Pares', module: 'F10 · Comunicação', url: 'modulos/revisao-pares.html', keywords: 'revisão por pares peer review parecerista revisão duplo-cega open review editor pareceres' },
    { title: 'Dados de Pesquisa', module: 'F11 · Execução', url: 'modulos/dados-pesquisa.html', keywords: 'dados de pesquisa coleta de dados dicionário de variáveis anonimização gestão de dados qualidade' },
    { title: 'Divulgação Científica', module: 'F15 · Impacto', url: 'modulos/divulgacao-cientifica.html', keywords: 'divulgação científica comunicação pública da ciência linguagem acessível alcance social' },
    { title: 'Ferramentas Digitais', module: 'F16 · Impacto', url: 'modulos/ferramentas-digitais.html', keywords: 'ferramentas digitais fluxo acadêmico gerenciador de referências automação organização de pesquisa' },
    { title: 'IA na Pesquisa', module: 'F17 · Impacto', url: 'modulos/ia-pesquisa.html', keywords: 'ia na pesquisa inteligência artificial acadêmica uso responsável transparência supervisão humana' },
    { title: 'Identidade do Pesquisador', module: 'F12 · Identidade', url: 'modulos/identidade-pesquisador.html', keywords: 'identidade do pesquisador trajetória acadêmica autoria presença científica reputação' },
    { title: 'Financiamento', module: 'F13 · Identidade', url: 'modulos/financiamento.html', keywords: 'financiamento pesquisa edital agências de fomento proposta orçamento grant' },
    { title: 'Bibliometria', module: 'F14 · Identidade', url: 'modulos/bibliometria.html', keywords: 'bibliometria citações indice h altmetria métricas acadêmicas impacto científico' },
    { title: 'Submissão de Manuscritos', module: 'F19 · Comunicação', url: 'modulos/submissao.html', keywords: 'submissão manuscrito checklist sistema editorial revisão resposta pareceristas' },
    { title: 'Modelo Brasileiro de Publicação', module: 'F18 · Nacional', url: 'modulos/modelo-brasileiro.html', keywords: 'qualis scielo redalyc capes acesso aberto diamante brasil periódicos' }
    ,{ title: 'Lattes, ORCID e Identificadores', module: 'BR1 · Nacional', url: 'modulos/lattes-orcid.html', keywords: 'lattes orcid identificadores autoria currículo acadêmico cnpq brasil' }
    ,{ title: 'Fomento e Avaliação no Brasil', module: 'BR2 · Nacional', url: 'modulos/fomento-avaliacao-brasil.html', keywords: 'capes cnpq faps fapesp sucupira avaliação da pós-graduação fomento brasil' }
    ,{ title: 'Periódicos, Indexação e Submissão no Brasil', module: 'BR3 · Nacional', url: 'modulos/periodicos-indexacao-brasil.html', keywords: 'periódicos brasileiros indexação scielo redalyc latindex qualis submissão brasil estratégia editorial desk reject escopo' }
    ,{ title: 'Repositórios, Preservação e Circulação no Brasil', module: 'BR4 · Nacional', url: 'modulos/repositorios-preservacao-brasil.html', keywords: 'repositórios institucionais brasil preservação digital circulação institucional dados sciELO preprints RI bibliotecas' }
  ];

  var mainNav = document.getElementById('mainNav');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var backToTop = document.getElementById('backToTop');
  var globalLevelBtns = document.querySelectorAll('.level-btn');
  var searchInput = document.getElementById('globalSearch');
  var searchResults = document.getElementById('searchResults');
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;

  function setButtonState(buttons, activeButton) {
    buttons.forEach(function (button) {
      button.classList.toggle('active', button === activeButton);
      button.setAttribute('aria-pressed', String(button === activeButton));
    });
  }

  function updateTabPanels(tabs, panels, level) {
    tabs.forEach(function (tab) {
      var isActive = tab.getAttribute('data-level') === level;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    panels.forEach(function (panel) {
      var isActive = panel.getAttribute('data-level') === level;
      panel.classList.toggle('active', isActive);
      panel.hidden = !isActive;
    });
  }

  function initSemantics() {
    document.querySelectorAll('svg').forEach(function (icon) {
      if (!icon.hasAttribute('aria-hidden') && !icon.hasAttribute('aria-label') && icon.getAttribute('role') !== 'img') {
        icon.setAttribute('aria-hidden', 'true');
        icon.setAttribute('focusable', 'false');
      }
    });

    if (navToggle && navLinks) {
      navToggle.setAttribute('aria-controls', 'navLinks');
    }

    if (searchInput) {
      searchInput.setAttribute('type', 'search');
      searchInput.setAttribute('name', 'global-search');
      searchInput.setAttribute('aria-label', 'Buscar módulo ou conceito');
      searchInput.setAttribute('spellcheck', 'false');
    }

    if (searchResults) {
      searchResults.hidden = true;
      searchResults.setAttribute('role', 'list');
    }

    globalLevelBtns.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    });

    document.querySelectorAll('.concept').forEach(function (concept, conceptIndex) {
      var tabs = concept.querySelectorAll('.concept-level-tab');
      var panels = concept.querySelectorAll('.concept-level-panel');
      var tabList = concept.querySelector('.concept-levels');
      var conceptId = concept.getAttribute('id') || ('concept-' + conceptIndex);

      if (tabList) {
        tabList.setAttribute('role', 'tablist');
        tabList.setAttribute('aria-label', 'Níveis de profundidade do conteúdo');
      }

      tabs.forEach(function (tab, index) {
        var level = tab.getAttribute('data-level');
        var panel = concept.querySelector('.concept-level-panel[data-level="' + level + '"]');
        var tabId = conceptId + '-tab-' + level;
        var panelId = conceptId + '-panel-' + level;

        tab.setAttribute('role', 'tab');
        tab.id = tabId;

        if (panel) {
          panel.setAttribute('role', 'tabpanel');
          panel.setAttribute('aria-labelledby', tabId);
          panel.id = panelId;
          tab.setAttribute('aria-controls', panelId);
        }

        if (index === 0 && !tab.hasAttribute('tabindex')) {
          tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');
        }
      });

      var activeTab = concept.querySelector('.concept-level-tab.active') || tabs[0];
      if (activeTab) {
        updateTabPanels(tabs, panels, activeTab.getAttribute('data-level'));
      }
    });

    document.querySelectorAll('.glossary-filter-btn').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    });

    var glossaryFilter = document.querySelector('.glossary-filter');
    if (glossaryFilter) {
      glossaryFilter.setAttribute('role', 'toolbar');
      glossaryFilter.setAttribute('aria-label', 'Filtrar termos do glossário por letra');
    }
  }

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

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navLinks.classList.contains('open')) {
          closeMobileNav();
          navToggle.focus();
        }
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
      updateTabPanels(
        concept.querySelectorAll('.concept-level-tab'),
        concept.querySelectorAll('.concept-level-panel'),
        level
      );
    });
  }

  function initLevels() {
    if (!globalLevelBtns.length) return;

    var savedLevel = localStorage.getItem('ecossistema-level') || '2';

    globalLevelBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-level') === savedLevel);
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-level') === savedLevel));
      btn.addEventListener('click', function () {
        var level = this.getAttribute('data-level');
        setButtonState(globalLevelBtns, this);
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
      updateTabPanels(
        concept.querySelectorAll('.concept-level-tab'),
        concept.querySelectorAll('.concept-level-panel'),
        level
      );
    });

    document.addEventListener('keydown', function (event) {
      var tab = event.target.closest('.concept-level-tab');
      if (!tab) return;
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return;

      var tabs = Array.prototype.slice.call(tab.closest('.concept').querySelectorAll('.concept-level-tab'));
      var currentIndex = tabs.indexOf(tab);
      var nextIndex = currentIndex;

      if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;

      event.preventDefault();
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
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

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
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

    if (prefersReducedMotion) {
      counters.forEach(function (counter) {
        counter.textContent = counter.getAttribute('data-count');
      });
      return;
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
      searchResults.hidden = true;
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

      searchResults.hidden = false;
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
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });

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
          button.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

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
    initSemantics();
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
