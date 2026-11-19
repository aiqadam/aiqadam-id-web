# aiqadam-id-web (QA)

The static login page of AI Qadam ID for the QA environment, served by GitHub Pages at
`https://id-qa.aiqadam.org`. The design, the flows it calls and the decisions are in the private
`aiqadam/aiqadam-id` repository (ADR-0008, ADR-0023, ADR-0024; work package W04a).

- Static HTML and JS only. **No secrets and no personal data** in this repository — the bot token and
  module keys live only in the Qadam Flow project.
- One custom domain per GitHub Pages repository, so prod (`id.aiqadam.org`) gets its own repository.
- QA only: test accounts and made-up data. The legal texts are drafts until a lawyer has reviewed them;
  QA shows them as drafts, under a banner (owner, 2026-11-19).
- `index.html` + `app.js`: log in with Telegram (the `Telegram.Login.auth` popup), the 18+ step, the
  consents, settings, account deletion and the return to a module. The web session is kept only in the
  script's memory. The page stays blank inside a frame (Pages cannot send `frame-ancestors`).
- `legal.html` + `legal.js`: the terms and the privacy policy as text. `md.js` renders Markdown with DOM
  nodes and text only, never `innerHTML`.
- `i18n/*.json` and `legal/<lang>/*.md` are **copies** from `aiqadam/aiqadam-id` (`i18n/`,
  `docs/legal/`). Do not edit them here: change the source, run its `tools/i18n_legal.py`, copy again.
- `return-stub.html` stands in for a module's return page on QA: it reads the return token from the URL
  fragment, removes it from the address bar and asks the QA flow `stub-return-verifier` to check it. It is
  not part of the product and is not carried to prod.
