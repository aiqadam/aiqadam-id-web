# aiqadam-id-web (QA)

The static login page of AI Qadam ID for the QA environment, served by GitHub Pages at
`https://id-qa.aiqadam.org`. The design, the flows it calls and the decisions are in the private
`aiqadam/aiqadam-id` repository (ADR-0008, ADR-0023, ADR-0024; work package W04a).

- Static HTML and JS only. **No secrets and no personal data** in this repository — the bot token and
  module keys live only in the Qadam Flow project.
- One custom domain per GitHub Pages repository, so prod (`id.aiqadam.org`) gets its own repository.
- QA only: test accounts and made-up data; the legal texts are drafts until a lawyer has reviewed them.
- `return-stub.html` stands in for a module's return page on QA: it reads the return token from the URL
  fragment, removes it from the address bar and asks the QA flow `stub-return-verifier` to check it. It is
  not part of the product and is not carried to prod.
