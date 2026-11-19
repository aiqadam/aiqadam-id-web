// Shows a legal draft (terms or privacy) as text. The files are copies of aiqadam-id docs/legal/<lang>/;
// on QA they are shown as drafts, under the draft banner (owner, 2026-11-19; ID-12).
(function () {
  'use strict';
  if (window.top !== window.self) return;
  document.documentElement.classList.add('ok');
  var LANGS = ['uz', 'ru', 'en'], DOCS = ['terms', 'privacy'];
  var q = new URLSearchParams(location.search);
  var doc = DOCS.indexOf(q.get('doc')) >= 0 ? q.get('doc') : 'terms';
  var lang = LANGS.indexOf(q.get('lang')) >= 0 ? q.get('lang') : 'uz';
  var main = document.getElementById('app');

  function get(path, json) {
    return fetch(path, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error('http ' + r.status);
      return json ? r.json() : r.text();
    });
  }
  Promise.all([get('i18n/' + lang + '.json', true), get('legal/' + lang + '/' + doc + '.md', false).catch(function () { return null; })])
    .then(function (res) {
      var d = res[0], t = function (k) { return d[k] || k; };
      document.documentElement.lang = lang;
      document.title = t('legal.' + doc + '.title') + ' — AI Qadam ID (QA)';
      document.getElementById('banner').textContent = t('qa.banner');
      var nav = document.getElementById('langs');
      LANGS.forEach(function (l) {
        var a = document.createElement('a');
        a.className = l === lang ? 'lang on' : 'lang';
        a.href = 'legal.html?doc=' + doc + '&lang=' + l;
        a.textContent = t('lang.' + l);
        nav.appendChild(a);
      });
      if (res[1] === null) { var p = document.createElement('p'); p.textContent = t('legal.err.load'); main.appendChild(p); return; }
      // No links out of a draft: every link renders as plain text.
      window.IdMd.block(main, res[1], function () { return false; });
    })
    .catch(function () { main.textContent = 'legal.err.load'; });
})();
