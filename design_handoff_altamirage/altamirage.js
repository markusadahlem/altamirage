/* Altamirage — shared behaviour: light/dark toggle, nav, reveal, filter */
(function () {
  var KEY = 'altamirage-theme';

  function isDark() {
    try { return localStorage.getItem(KEY) === 'slate'; } catch (e) { return false; }
  }
  function apply(dark) {
    if (dark) document.documentElement.setAttribute('data-theme', 'slate');
    else document.documentElement.removeAttribute('data-theme');
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.textContent = dark ? 'Hell' : 'Dunkel';
      b.setAttribute('aria-pressed', String(dark));
    });
    try { localStorage.setItem(KEY, dark ? 'slate' : 'paper'); } catch (e) {}
  }

  // apply stored theme ASAP (avoid flash)
  if (isDark()) document.documentElement.setAttribute('data-theme', 'slate');

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    apply(isDark());

    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.addEventListener('click', function () { apply(!isDark()); });
    });

    // mobile nav
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
    }

    // reveal on scroll
    var els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && els.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      els.forEach(function (el) { io.observe(el); });
    } else {
      els.forEach(function (el) { el.classList.add('in'); });
    }

    // archive filter
    var filterBar = document.querySelector('.filterbar');
    if (filterBar) {
      var entries = Array.prototype.slice.call(document.querySelectorAll('.entries .entry'));
      function applyFilter(f) {
        filterBar.querySelectorAll('button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.filter === f)); });
        entries.forEach(function (en) {
          en.hidden = !(f === 'all' || en.dataset.section === f);
        });
        var count = document.querySelector('[data-count]');
        if (count) {
          var n = entries.filter(function (e) { return !e.hidden; }).length;
          count.textContent = (n < 10 ? '0' + n : n) + ' Beiträge';
        }
      }
      filterBar.querySelectorAll('button').forEach(function (btn) {
        btn.addEventListener('click', function () { applyFilter(btn.dataset.filter); });
      });
      var hash = (location.hash || '').replace('#', '');
      var valid = ['graue-substanz', 'allgemeines', 'migraenegehirn', 'gray-matters'];
      if (valid.indexOf(hash) !== -1) applyFilter(hash);
    }

    // prevent placeholder links from jumping to top
    document.querySelectorAll('a[href="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); });
    });
  });
})();
