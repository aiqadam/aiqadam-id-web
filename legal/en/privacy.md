# AI Qadam ID Privacy Policy

> **DRAFT. Not published. Not legal advice.** Prepared for review by a licensed lawyer in
> Uzbekistan; not published before that review (ID-12). `[LAWYER: …]` is a question for the lawyer,
> `[OPEN: …]` a fact or decision needed before publication; see `docs/legal/README.md`.

- Version: `text_version: privacy.v1.en`
- Effective date: `[DATE]`

## 1. Who processes your data

Personal data operator: `[OPERATOR: name, TIN/PINFL, address]` (the "Operator", "we").

`[LAWYER: question 1 — the owner of the personal data database, if not the same as the Operator]`

Contact for personal data questions: privacy@aiqadam.org.

## 2. What AI Qadam ID is

AI Qadam ID is the single member profile of the AI Qadam community. Through it you log in to the
community's services ("modules") and manage your consents. These modules are connected or being
connected to AI Qadam ID:

- `events` — the AI Qadam events Telegram bot;
- `ask` — AI Qadam Ask, where community experts advise people who need advice.

Log-in to AI Qadam ID is only through Telegram: in a bot or at `id.aiqadam.org` through the Telegram
Login Widget. There is no other way to log in.

## 3. What data we keep

**The AI Qadam ID profile:**

| Data | Source | Note |
|---|---|---|
| Telegram ID (`telegram_id`) | Telegram | the only key by which we recognise you |
| Telegram first and last name | Telegram | updated at every contact with a bot or log-in; the last name may be absent |
| Telegram username (`username`) | Telegram | may be absent; no rights rest on it |
| First and last name for the profile | you | given at your first introduction |
| Position | you | |
| Company | you | optional |
| City | you | |
| Interface language | you | Uzbek, Russian or English |
| Date the record was created, date the profile was completed, date of last activity | system | the activity date is needed to delete inactive profiles (section 9) |
| Phone number | the events bot, earlier | only if you gave it in the events bot before 14 September 2026. Not collected since that date. Used only to restore access to the profile at your request (section 4) and given to no module |

**Consents.** For each consent: purpose, module, version of the text you accepted, date given and
date withdrawn. A separate log of "given / withdrawn" events is kept for each consent, so that we can
show what you accepted and when.

**Module data in AI Qadam ID.** Fields that only one module needs. Today this is one field of the
`events` module: whether you have blocked the events bot.

**What we do not collect or keep:** your Telegram profile photo (the log-in widget may send it, but
we do not save it), identity documents, biometric and genetic data, data on health, beliefs and
other special categories of data. The age confirmation (section 12) is not saved.

`[OPEN: O-9 — cookies and browser local storage on id.aiqadam.org, including those of the Telegram widget]`

## 4. Purposes of processing and grounds

Each purpose is a separate consent. No consent is given automatically together with another.

| Purpose | Data | Ground |
|---|---|---|
| Keep your AI Qadam ID profile: log-in to AI Qadam services, storing the profile and consents, deletion on your request | section 3 | the base consent; with the one "I consent" button you give it and accept the Terms of Service `[LAWYER: question 2]` |
| Restore access to the profile if you lose your Telegram account | the phone number, if we have it | the base consent `[LAWYER: question 13]`; only at your request |
| Give a module the profile fields it needs | only the fields on the module's list (section 5) | consent to that module, separate for each module |
| A module's mailings (for example, event announcements) | Telegram ID | consent to that module's mailings, separate for each module; not given by default |
| Give your profile to a specific company (a vacancy, a hackathon task) | the fields named in the consent | a separate consent naming the company; given only by your own action |
| Summary statistics for partners and sponsors | anonymised aggregates (section 6) | `[LAWYER: question 15 — ground for aggregates]` |

We do not use your data for purposes not named in this policy. For a new purpose we will ask for a
new consent.

**If you registered in the events bot before AI Qadam ID launched.** Your profile has been moved
from the bot to AI Qadam ID. The processing consent you gave in the bot counts as the base consent and
the consent to the `events` module; your consent to the bot's mailings counts as consent to the
`events` module's mailings. We do not ask again: the purpose is the same — taking part in AI Qadam
events. Your data is not given to other modules under the carried-over consents. You can withdraw any
of them in the settings (section 10). `[LAWYER: question 7 — is a separate notice needed, and within
what period]`

## 5. What modules receive

A module receives from AI Qadam ID only the fields on its approved list, and only after your consent
to that module. A module cannot widen the list itself: that needs a new decision and your new
consent. One module's data is not given to other modules.

| Module | Profile fields it receives |
|---|---|
| `events` | Telegram ID; Telegram first name, last name and `username`; first and last name for the profile; position; company; city; the date the profile was completed |
| `ask` (experts) | first and last name for the profile; position; company; Telegram `username` |

No module receives the phone number or the date of last activity.

**Modules' own records.** Modules keep data on how you use them. The `events` module: registrations,
tickets and attendance marks; feedback; quiz answers (with your Telegram name at the time of the
answer); mailing delivery records; unfinished steps of a dialogue with the bot; for organisers —
rights and invitations. The `ask` module: `[OPEN: W07 — what data]`. These records are deleted when
you withdraw the consent to the module and when you delete the account (section 10).

`[LAWYER: question 1 — whether the modules process data on behalf of the same Operator]`
`[OPEN: W07 — which people see data inside a module: event organisers, the Ask coordinator]`

## 6. Partners and sponsors

AI Qadam partners and sponsors receive neither profiles nor database exports. We do not sell or hand
over the database.

A partner may see only summary figures: how many members, which roles, cities, events. A group of
fewer than 5 people is not shown as a number or a share — "fewer than 5" is shown instead. A hidden
group cannot be worked out from totals and neighbouring rows.

Your profile reaches a specific company only if you yourself pressed "send my profile to this
company". That is a separate consent that names the company and lists the fields given.

## 7. Who else has access to the data

**Processors** — organisations that store data on our instructions:

| Processor | What it does | Where |
|---|---|---|
| `[PROCESSOR: hosting provider (sponsor), name, TIN, address]` | provides the servers on which AI Qadam ID and the modules run | `[OPEN: data-centre location; per the project — Uzbekistan, not confirmed by a contract]` |
| Cloudflare `[PROCESSOR: full legal entity name, address]` | stores encrypted database backups (the R2 service) | the European Union jurisdiction, section 8 |

`[LAWYER: question 5 — what documents are needed with each processor]`
`[OPEN: O-9 — who hosts the id.aiqadam.org page and runs the domain]`

**Telegram.** Log-in and bot messages go through Telegram. Telegram is an independent service with
its own privacy policy; it does not process data on our instructions. `[LAWYER: question 4(d)]`

**State bodies** — only in cases expressly provided for by the law of the Republic of Uzbekistan.

## 8. Where the data is kept. A copy outside Uzbekistan

The main AI Qadam ID database is kept on the hosting provider's servers `[OPEN: country and address
of the data centre]`.

**An encrypted backup copy of the database, including profiles, is kept outside Uzbekistan** — in
Cloudflare R2 cloud storage, in the European Union jurisdiction. The copy is encrypted before it is
sent; Cloudflare does not have the decryption key. The key is held by `[OPEN: O-7 — who holds the
key, without naming a person]`. `[LAWYER: question 4 — cross-border transfer and its ground]`

If the lawyer finds keeping the copy abroad unlawful, the copy will be moved to Uzbekistan and this
policy updated.

## 9. Retention periods

| What | How long it is kept |
|---|---|
| Profile, consents and consent log | while the base consent is in force. If you do not use AI Qadam for 3 years (no log-in and no contact with the bots), the profile is deleted. We warn you in Telegram through the AI Qadam bot you use 30 days before; if you log in or write to the bot in that time, the profile stays |
| Phone number | together with the profile |
| Modules' own records | under the module's rules, but no longer than the consent to the module is in force and the account exists |
| Telegram ID for re-sending a deletion request to modules | about 65 minutes after the deletion; if a module has not acknowledged it — until it does, at most 7 days |
| Deletion log | 35 days after the module acknowledged the deletion. The log holds no profile — only a keyed hash (HMAC) of the Telegram ID, the module name, a status and two dates |
| Backups on the server | up to 14 days |
| Encrypted backups in Cloudflare R2 | up to 35 days. The copies are protected by a deletion lock, and until it ends a copy cannot be deleted early `[OPEN: O-6 — lock period; per the infrastructure documentation, 30 days]` |
| Technical run logs | `[OPEN: O-5 — the actual period on the server; platform default 30 days]`. Single data items such as the Telegram ID may get into the log; steps that carry the profile are not logged |

`[LAWYER: question 3 — are these periods lawful after withdrawal]`

## 10. Withdrawing consent and deleting the account

Any consent can be withdrawn at any time — at `id.aiqadam.org` ("in the settings"); the AI Qadam ID
bot `[OPEN: bot name]` links to it.

**Withdrawing the base consent deletes the account in all AI Qadam services.** You can also delete
the account directly. In both cases:

1. Right after you confirm, we delete your profile, consents, consent log and module data from
   AI Qadam ID.
2. At the same moment every module you consented to gets a deletion request and deletes its records
   about you (section 5), including organiser rights and invitations if you had any. If a module has
   not acknowledged the deletion, the request is repeated every 5 minutes for an hour. If there is
   still no acknowledgement after an hour, a responsible person of the Operator is notified and
   fixes the cause in the module, and the request is repeated every hour until the module
   acknowledges — no later than 3 working days after your request.
3. In backups your data stays until the backup expires (section 9): up to 14 days on the server and
   up to 35 days in Cloudflare R2. A single person cannot be removed from a backup. If the database is
   ever restored from a backup, we re-apply the deletion log so that your data does not come back.

Deletion is irreversible. If you come back, a new profile is created and the consents have to be
given again.

**Withdrawing a module consent.** The module deletes its records about you (section 5) in the same
way and within the same periods as in points 2 and 3, and stops receiving your data from
AI Qadam ID. You will no longer be able to use that module or receive its mailings. Your AI Qadam ID
profile and other modules are not affected.

**Withdrawing a mailing consent.** The module stops sending you mailings. Messages the service cannot
work without (for example, an event ticket) are not mailings and keep coming.

## 11. Your rights and how to use them

You have the right to:

- find out whether we hold your data and which data;
- receive information about its processing on request;
- change or complete your data;
- withdraw any consent;
- delete your account;
- appeal against our actions to the authorised state body `[LAWYER: question 14 — name of the body]`
  or to a court.

Your profile, consents and account deletion are available to you in the settings. Send other
requests, including access recovery, to privacy@aiqadam.org. So that we do not disclose data to a stranger, we check that the request comes
from the holder of the Telegram account. We reply within `[LAWYER: question 14 — period under the
law]`.

## 12. Minors

AI Qadam ID is for people aged 18 or over. Before a profile is created we ask you to confirm that you
are 18 or older; if not, no profile is created and nothing is saved. If we learn that a profile
belongs to a person under 18, we delete it. `[LAWYER: question 6 — is self-declaration enough]`

## 13. Data protection

- Only one authorised person of the Operator has access to the AI Qadam ID database.
- Modules call AI Qadam ID with signed requests; each module has its own key.
- Only the needed fields, not the whole profile, pass through the system's technical steps; steps
  that carry personal data are not written to the run log.
- Backups are encrypted before they are sent to storage.

If a breach happens that may affect your data, we will report it to the authorised body within the
period set by law, and to you in Telegram through an AI Qadam bot.
`[OPEN: owner's decision on notifying members; LAWYER: question 4(e) — periods]`

## 14. Changes to this policy

Each version of this policy and of each consent text has a version number. We keep which version you
accepted. We announce material changes in advance in Telegram through the AI Qadam bots and at `id.aiqadam.org`
`[OPEN: how many days]`. If the purposes of processing, the data given to a module or the recipients
change, we ask for a new consent; without it the data is not used for the new purpose.

## 15. Language

The policy is published in Uzbek, Russian and English. If the versions differ, the Uzbek version
prevails. `[LAWYER: question 12]`

## 16. Contacts

`[OPERATOR: name, TIN/PINFL, address]`
E-mail: privacy@aiqadam.org
