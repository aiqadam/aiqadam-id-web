// The AI Qadam ID page (QA): Telegram log-in, the 18+ step, consents, settings, account deletion and the
// return to a module (ADR-0008, ADR-0023, ADR-0024). The web session token lives only in this script's
// memory: never in storage, the URL or a cookie; a reload means a new log-in. Every text comes from
// i18n/<lang>.json (docs/I18N.md); the server checks everything again, the page only guides.
(function () {
  'use strict';
  // Clickjacking: GitHub Pages cannot send frame-ancestors, so the page stays hidden inside a frame.
  if (window.top !== window.self) return;
  document.documentElement.classList.add('ok');

  var API = 'https://app.flow.aiqadam.org/api/v1/webhooks/';
  var FLOW = { login: 'BwcwwapVJTFLQG40iHQtn', me: 'Ssng8L7KeDCI3ik5Ri56O', logout: 'Reahzth7go726oMG49tC7',
    consent: 'DYScDukSHsHX8CZeCm1FU', ret: 'uus9q1FpbRpRClpzq2rQR' };
  // The ID bot's public numeric id for the Telegram log-in popup (not its token).
  var BOT_ID = 9261772776;
  var LANGS = ['uz', 'ru', 'en'], DEFAULT = 'uz';
  // Modules on the page: their consents and mailings (web-consent `plan`); `ask` joins in W07.
  var MODULES = ['events'], MAILINGS = ['events'];

  var dict = {}, session = null, me = null, ret = null, busy = false;
  var state = { lang: DEFAULT, screen: 'login', msg: null, ctx: {} };

  var params = new URLSearchParams(location.search);
  if (LANGS.indexOf(params.get('lang')) >= 0) state.lang = params.get('lang');
  if (params.has('module') || params.has('return_to')) {
    var m = params.get('module'), r = params.get('return_to');
    // The server checks return_to against its allow-list; this only refuses what can never pass.
    if (MODULES.indexOf(m) >= 0 && typeof r === 'string' && r.length <= 2048 && /^https:\/\/[^\s#]+$/.test(r)) ret = { module: m, return_to: r };
    else state.msg = { key: 'err.bad_return', kind: 'err' };
  }

  // Strings: the chosen language, then uz, then the raw key, so a gap is visible (docs/I18N.md).
  function t(key, vars) {
    var s = (dict[state.lang] && dict[state.lang][key]) || (dict[DEFAULT] && dict[DEFAULT][key]) || key;
    return s.replace(/\{([A-Za-z_]+)\}/g, function (all, name) {
      return vars && Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : all;
    });
  }
  // A consent or withdrawal screen is shown only in a language whose own file has every string of it and
  // the version number, so the stored text_version names the text the person saw (W04a review I-2).
  function own(keys) {
    var d = dict[state.lang];
    return !!d && keys.every(function (k) { return typeof d[k] === 'string' && d[k] !== ''; });
  }
  function version(name) {
    var n = own(['_v.' + name]) ? dict[state.lang]['_v.' + name] : '';
    return /^[1-9][0-9]{0,3}$/.test(n) ? name + '.v' + n + '.' + state.lang : null;
  }
  function legalUrl(doc) { return 'legal.html?doc=' + doc + '&lang=' + state.lang; }
  function linkOk(u) { return /^legal\.html\?doc=(terms|privacy)&lang=(uz|ru|en)$/.test(u); }
  function serviceVars(module) {
    return { service: t('service.' + module + '.name'), Service: t('service.' + module + '.subject'),
      deleted: t('withdraw.module.deleted.' + module), terms_url: legalUrl('terms'), privacy_url: legalUrl('privacy') };
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function button(key, onClick, cls) {
    var b = el('button', cls || '', t(key));
    b.type = 'button';
    b.disabled = busy;
    b.addEventListener('click', function () { if (!busy) onClick(); });
    return b;
  }

  function call(name, body) {
    return fetch(API + FLOW[name] + '/sync', {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body),
      cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer'
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (b) { return { status: r.status, body: b || {} }; });
    });
  }

  function go(screen, msg, ctx) { state.screen = screen; state.msg = msg || null; state.ctx = ctx || {}; render(); }
  function work(promise) {
    busy = true; render();
    return promise.catch(function () { return { status: 0, body: {} }; }).then(function (res) { busy = false; return res; });
  }
  // A refused call: an ended session goes back to log-in; the rest stay on the screen with a message.
  function failed(res) {
    var reason = res.body && typeof res.body.reason === 'string' ? res.body.reason : '';
    if (res.status === 401) { session = null; me = null; return go('login', { key: 'err.session_expired', kind: 'err' }); }
    var key = res.status === 0 ? 'err.network'
      : ({ base_required: 'err.base_required', module_required: 'err.module_required', withdraw_pending: 'err.withdraw_pending',
        no_account: 'err.no_account', bad_return_to: 'err.bad_return', not_configured: 'err.not_configured' })[reason] || 'err.generic';
    if (reason === 'bad_return_to' || reason === 'not_configured') ret = null;
    state.msg = { key: key, kind: 'err' };
    render();
  }

  function inForce(purpose, module) {
    return !!(me && Array.isArray(me.consents) && me.consents.some(function (c) {
      return c && c.purpose === purpose && c.module === module && c.in_force === true;
    }));
  }
  function consentRow(purpose, module) {
    return me && Array.isArray(me.consents) ? me.consents.filter(function (c) { return c && c.purpose === purpose && c.module === module; })[0] : null;
  }

  // ---- log-in ----
  function login() {
    if (!window.Telegram || !window.Telegram.Login) return failed({ status: 0, body: {} });
    state.msg = { key: 'login.err.popup', kind: 'note' };
    render();
    // Write access lets the ID bot reach a person who signed up only here, e.g. the inactivity warning (ADR-0024).
    window.Telegram.Login.auth({ bot_id: BOT_ID, request_access: 'write', lang: state.lang }, function (user) {
      if (!user) { state.msg = null; return render(); }
      work(call('login', { widget: user })).then(function (res) {
        if (res.status === 200 && res.body.ok === true && typeof res.body.session === 'string') {
          session = res.body.session;
          return refresh().then(next);
        }
        go('login', { key: res.status === 0 ? 'err.network' : 'login.err.auth_failed', kind: 'err' });
      });
    });
  }
  function refresh() {
    return work(call('me', { session: session })).then(function (res) {
      if (res.status === 200 && res.body.ok === true) { me = res.body; return true; }
      failed(res);
      return false;
    });
  }
  // Ends the session now; on "No" at 18+ and on "I do not consent" nothing may stay (consents.md §1).
  function logout(msg) {
    var s = session;
    session = null; me = null;
    return work(s ? call('logout', { session: s }) : Promise.resolve(null)).then(function () { go('login', msg); });
  }
  // What the person needs next. On a return, web-return is asked first: it checks the module and return_to
  // before the consents, so no consent screen is shown for an address it will refuse (W04a review L-3).
  function next(ok) {
    if (ok === false) return;
    if (ret) return back();
    if (!inForce('base', 'id')) return go('age');
    go('settings');
  }
  function back() {
    go('returning');
    work(call('ret', { session: session, module: ret.module, return_to: ret.return_to })).then(function (res) {
      var b = res.body;
      if (res.status === 200 && b.ok === true && b.return_to === ret.return_to &&
          typeof b.token === 'string' && /^[A-Za-z0-9_-]{1,2000}\.[0-9a-f]{64}$/.test(b.token)) {
        var target = b.return_to + '#token=' + b.token, s = session;
        session = null; me = null; ret = null;
        // The module now holds the person; end the ID session before leaving.
        return call('logout', { session: s }).catch(function () {}).then(function () { location.replace(target); });
      }
      var reason = res.body && res.body.reason;
      if (res.status === 409 && reason === 'base_required') return go('age');
      if (res.status === 409 && reason === 'module_required') return go('module', null, { module: ret.module, then: 'return' });
      if (res.status === 401) return failed(res);
      // Refused (e.g. bad return_to, which also drops `ret`): carry on as a plain visit, keeping the message.
      failed(res);
      go(inForce('base', 'id') ? 'settings' : 'age', state.msg);
    });
  }

  // ---- consents ----
  function give(purpose, module, then) {
    var tv = version(purpose + '.' + module);
    if (!tv) return failed({ status: -1, body: {} });
    work(call('consent', { session: session, purpose: purpose, module: module, action: 'grant',
      text_version: tv })).then(function (res) {
      if (res.status !== 200 || res.body.ok !== true) return failed(res);
      refresh().then(function (ok) {
        if (!ok) return;
        if (purpose === 'base') return next();
        if (purpose === 'module' && MAILINGS.indexOf(module) >= 0 && !inForce('mailing', module)) return go('mailing', null, { module: module, then: then });
        after(then);
      });
    });
  }
  // msg false: nothing was written, so no "saved" line.
  function after(then, msg) { if (then === 'return' && ret) return back(); go('settings', msg === false ? null : msg || { key: 'settings.saved', kind: 'ok' }); }
  function withdraw(purpose, module) {
    var tv = version('withdraw.' + purpose);
    if (!tv) return failed({ status: -1, body: {} });
    work(call('consent', { session: session, purpose: purpose, module: module, action: 'withdraw',
      text_version: tv })).then(function (res) {
      if (res.status !== 200 || res.body.ok !== true) return failed(res);
      if (purpose === 'base') { session = null; me = null; ret = null; return go('login', { key: 'withdraw.base.done', kind: 'ok' }); }
      var done = { key: 'withdraw.' + purpose + '.done', vars: serviceVars(module), kind: 'ok' };
      refresh().then(function (ok) { if (ok) go('settings', done); });
    });
  }

  // ---- screens ----
  function consentScreen(main, prefix, vars, yes, no, need) {
    if (!own([prefix + '.text', prefix + '.yes', prefix + '.no'].concat(need || []))) {
      main.appendChild(el('p', 'msg err', t('err.generic')));
      // Without the base consent nothing may stay behind: end the session, as "No" does (review R-1).
      main.appendChild(button('common.back', function () { if (session && inForce('base', 'id')) go('settings'); else logout(null); }));
      return;
    }
    var box = el('section', 'consent');
    window.IdMd.block(box, t(prefix + '.text', vars), linkOk);
    main.appendChild(box);
    var row = el('div', 'buttons');
    row.appendChild(button(prefix + '.yes', yes));
    row.appendChild(button(prefix + '.no', no));
    main.appendChild(row);
  }
  var SCREENS = {
    login: function (main) {
      main.appendChild(el('h1', '', t('login.title')));
      main.appendChild(el('p', '', ret ? t('login.return_hint', serviceVars(ret.module)) : t('login.subtitle')));
      main.appendChild(button('login.btn.telegram', login, 'primary'));
      var links = el('p', 'links');
      [['terms', 'login.terms_link'], ['privacy', 'login.privacy_link']].forEach(function (d) {
        var a = el('a', '', t(d[1])); a.href = legalUrl(d[0]); a.target = '_blank'; a.rel = 'noopener noreferrer';
        links.appendChild(a);
      });
      main.appendChild(links);
    },
    age: function (main) {
      consentScreen(main, 'age', {}, function () { go('base'); },
        function () { logout({ key: 'age.no_result', kind: 'note' }); });
    },
    base: function (main) {
      consentScreen(main, 'base', serviceVars('events'), function () { give('base', 'id'); },
        function () { logout({ key: 'base.no_result', kind: 'note' }); }, ['_v.base.id']);
    },
    module: function (main, ctx) {
      consentScreen(main, 'module.' + ctx.module, serviceVars(ctx.module), function () { give('module', ctx.module, ctx.then); },
        function () { ret = null; go('settings', { key: 'module.' + ctx.module + '.no_result', kind: 'note' }); },
        ['_v.module.' + ctx.module]);
    },
    mailing: function (main, ctx) {
      // Optional; declining changes nothing (consents.md §4).
      consentScreen(main, 'mailing.' + ctx.module, serviceVars(ctx.module), function () { give('mailing', ctx.module, ctx.then); },
        function () { after(ctx.then, false); }, ['_v.mailing.' + ctx.module]);
    },
    confirm: function (main, ctx) {
      var vars = ctx.purpose === 'base' ? {} : serviceVars(ctx.module);
      var need = ['_v.withdraw.' + ctx.purpose];
      if (ctx.purpose !== 'base') need.push('service.' + ctx.module + '.name', 'service.' + ctx.module + '.subject');
      if (ctx.purpose === 'module') need.push('withdraw.module.deleted.' + ctx.module);
      consentScreen(main, 'withdraw.' + ctx.purpose, vars, function () { withdraw(ctx.purpose, ctx.module); },
        function () { go('settings'); }, need);
    },
    returning: function (main) {
      main.appendChild(el('p', '', t('return.title', serviceVars(ret ? ret.module : 'events'))));
    },
    settings: function (main) {
      main.appendChild(el('h1', '', t('settings.title')));
      var p = me && me.profile && typeof me.profile === 'object' ? me.profile : {};
      main.appendChild(el('h2', '', t('settings.profile')));
      var dl = el('dl', 'profile');
      ['first_name', 'last_name', 'username', 'position', 'company', 'city'].forEach(function (k) {
        var v = typeof p[k] === 'string' && p[k] !== '' ? (k === 'username' ? '@' + p[k] : p[k]) : t('profile.empty');
        dl.appendChild(el('dt', '', t('profile.' + k)));
        dl.appendChild(el('dd', '', v));
      });
      dl.appendChild(el('dt', '', t('profile.phone')));
      dl.appendChild(el('dd', '', t(p.has_phone === true ? 'profile.phone.yes' : 'profile.phone.no')));
      main.appendChild(dl);

      main.appendChild(el('h2', '', t('settings.consents')));
      var list = el('ul', 'consents');
      var rows = [['base', 'id']];
      MODULES.forEach(function (mod) { rows.push(['module', mod]); if (MAILINGS.indexOf(mod) >= 0) rows.push(['mailing', mod]); });
      rows.forEach(function (pm) {
        var purpose = pm[0], mod = pm[1], c = consentRow(purpose, mod), on = inForce(purpose, mod);
        var li = el('li');
        li.appendChild(el('strong', '', t('consent.' + purpose + '.' + mod + '.label')));
        var status = on ? t('consent.status.on', { date: date(c.granted_at) })
          : c && c.revoked_at ? t('consent.status.revoked', { date: date(c.revoked_at) }) : t('consent.status.off');
        li.appendChild(el('span', 'status', status));
        if (purpose === 'base') {
          li.appendChild(button('settings.delete', function () { go('confirm', null, { purpose: 'base', module: 'id' }); }, 'danger'));
        } else if (on) {
          li.appendChild(button('consent.btn.withdraw', function () { go('confirm', null, { purpose: purpose, module: mod }); }));
        } else if (purpose === 'mailing' && !inForce('module', mod)) {
          li.appendChild(el('span', 'status', t('consent.needs_module')));
        } else {
          li.appendChild(button('consent.btn.give', function () { go(purpose, null, { module: mod, then: 'settings' }); }));
        }
        list.appendChild(li);
      });
      main.appendChild(list);
      main.appendChild(button('settings.logout', function () { logout({ key: 'login.logged_out', kind: 'ok' }); }));
    }
  };
  function date(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    try { return new Intl.DateTimeFormat(state.lang, { timeZone: 'Asia/Tashkent', dateStyle: 'medium' }).format(d); }
    catch (e) { return d.toISOString().slice(0, 10); }
  }

  function render() {
    document.documentElement.lang = state.lang;
    document.getElementById('banner').textContent = t('qa.banner');
    var langs = document.getElementById('langs');
    langs.textContent = '';
    LANGS.forEach(function (l) {
      var b = el('button', l === state.lang ? 'lang on' : 'lang', t('lang.' + l));
      b.type = 'button';
      b.setAttribute('aria-pressed', String(l === state.lang));
      b.addEventListener('click', function () { state.lang = l; render(); });
      langs.appendChild(b);
    });
    var main = document.getElementById('app');
    main.textContent = '';
    if (state.msg) {
      var msg = el('div', 'msg ' + state.msg.kind);
      msg.setAttribute('role', state.msg.kind === 'err' ? 'alert' : 'status');
      window.IdMd.block(msg, t(state.msg.key, state.msg.vars), linkOk);
      main.appendChild(msg);
    }
    if (busy) main.appendChild(el('p', 'busy', t('common.loading')));
    (SCREENS[state.screen] || SCREENS.login)(main, state.ctx);
  }

  Promise.all(LANGS.map(function (l) {
    return fetch('i18n/' + l + '.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (d) { dict[l] = d; });
  })).catch(function () {}).then(render);
})();
