// QA stand-in for a module's return page (ADR-0023 §5). The token arrives in the fragment, which is never
// sent to a server or in a Referer; it is removed from the address bar at once and checked by the QA stub
// verifier (signature, exp, aud, single use). Nothing about the person is shown.
(function () {
  'use strict';
  var VERIFY = 'https://app.flow.aiqadam.org/api/v1/webhooks/Lp3SWewGLyCzr6SP9pLFn/sync';
  var out = document.getElementById('status');
  var m = /^#token=([A-Za-z0-9_.-]{1,2200})$/.exec(location.hash);
  history.replaceState(null, '', location.pathname);
  if (!m) { out.textContent = 'No token received.'; return; }
  out.textContent = 'Token received, checking…';
  fetch(VERIFY, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ token: m[1] }) })
    .then(function (r) { return r.json(); })
    .then(function (b) { out.textContent = b && b.ok === true ? 'Token received and accepted.' : 'Token rejected: ' + String(b && b.reason); })
    .catch(function () { out.textContent = 'Token received; the check failed (network).'; });
})();
