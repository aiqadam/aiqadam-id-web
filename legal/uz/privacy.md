# AI Qadam ID maxfiylik siyosati

> **Note for the translator (en):** AI draft translation of `ru/privacy.md` (2026-11-18), made at the
> owner's request as a base for the human translator; not the final Uzbek text (ID-12). New
> alphabet of Law OʻRQ-1184 (ID-20), converted mechanically from the current Latin script.

> **QORALAMA. Eʼlon qilinmagan. Yuridik maslahat emas.** Matn Özbekiston Respublikasining litsenziyaga
> ega yuristi tekşiruvi uçun tayyorlangan va bu tekşiruvgaça eʼlon qilinmaydi (ID-12).
> `[LAWYER: …]` — yurist uçun savol, `[OPEN: …]` — eʼlon qilişdan oldin kerak bölgan fakt yoki
> qaror; `docs/legal/README.md` ga qarang.

- Tahrir: `text_version: privacy.v1.uz`
- Kuçga kiriş sanasi: `[DATE]`

## 1. Maʼlumotlaringizga kim işlov beradi

Şaxsga doir maʼlumotlar operatori: `[OPERATOR: name, TIN/PINFL, address]` (bundan buyon —
«Operator», «biz»).

`[LAWYER: question 1 — the owner of the personal data database, if not the same as the Operator]`

Şaxsga doir maʼlumotlar böyiça murojaat uçun: privacy@aiqadam.org.

## 2. AI Qadam ID nima

AI Qadam ID — AI Qadam hamjamiyati aʼzosining yagona profili. U orqali siz hamjamiyat xizmatlariga
(bundan buyon — «modullar») kirasiz va roziliklaringizni boşqarasiz. Hozir AI Qadam IDʼga quyidagi
modullar ulangan yoki ulanmoqda:

- `events` — AI Qadam tadbirlarining Telegram boti;
- `ask` — AI Qadam Ask xizmati, unda hamjamiyat ekspertlari maslahatga muhtoj kişilarga maslahat
  beradi.

AI Qadam IDʼga faqat Telegram orqali kiriladi: botda yoki `id.aiqadam.org` sahifasida Telegram kiriş
vidjeti orqali. Boşqa kiriş usullari yöq.

## 3. Qanday maʼlumotlarni saqlaymiz

**AI Qadam ID profili:**

| Maʼlumot | Qayerdan | Izoh |
|---|---|---|
| Telegram identifikatori (`telegram_id`) | Telegram | sizni taniydigan yagona kalit |
| Telegramdagi ism va familiya | Telegram | botga har bir murojaatingizda yoki kirişda yangilanadi; familiya bölmasligi mumkin |
| Telegram foydalanuvçi nomi (`username`) | Telegram | bölmasligi mumkin; unga heç qanday huquq asoslanmaydi |
| Profil uçun ism va familiya | siz | birinçi tanişuvda körsatasiz |
| Lavozim | siz | |
| Kompaniya | siz | majburiy emas |
| Şahar | siz | |
| Interfeys tili | siz | özbek, rus yoki ingliz |
| Yozuv yaratilgan sana, profil töldirilgan sana, oxirgi faollik sanasi | tizim | faollik sanasi nofaol profillarni öçiriş uçun kerak (9-bölim) |
| Telefon raqami | tadbirlar boti, avval | faqat uni 2026-yil 14-sentabrgaça tadbirlar botida körsatgan bölsangiz. Şu sanadan boşlab raqam yiğilmaydi. Faqat sörovingiz böyiça profilga kirişni tiklaş uçun işlatiladi (4-bölim) va heç bir modulga berilmaydi |

**Roziliklar.** Har bir rozilik böyiça: maqsad, modul, siz qabul qilgan matn versiyasi, berilgan va
qaytarib olingan sana. Har bir rozilik böyiça «berildi / qaytarib olindi» hodisalari jurnali alohida
saqlanadi — siz nimani va qaçon qabul qilganingizni tasdiqlay olişimiz uçun.

**AI Qadam IDʼdagi modul maʼlumotlari.** Faqat bitta modulga kerak bölgan maydonlar. Hozir bu
`events` modulining bitta maydoni: tadbirlar botini bloklaganmisiz.

**Nimani yiğmaymiz va saqlamaymiz:** Telegram profil rasmingiz (kiriş vidjeti uni yuborişi mumkin,
lekin biz uni saqlamaymiz), şaxsni tasdiqlovçi hujjatlar, biometrik va genetik maʼlumotlar,
soğliq, eʼtiqod haqidagi maʼlumotlar va boşqa maxsus toifadagi maʼlumotlar. Yoşni tasdiqlaş
(12-bölim) saqlanmaydi.

`[OPEN: O-9 — cookies and browser local storage on id.aiqadam.org, including those of the Telegram widget]`

## 4. Işlov beriş maqsadlari va asoslari

Har bir maqsad — alohida rozilik. Heç bir rozilik boşqasi bilan birga avtomatik berilmaydi.

| Maqsad | Maʼlumotlar | Asos |
|---|---|---|
| AI Qadam ID profilingizni yuritiş: AI Qadam xizmatlariga kiriş, profil va roziliklarni saqlaş, sörovingiz böyiça öçiriş | 3-bölim | asosiy rozilik; bitta «Rozilik beraman» tugmasi bilan siz uni berasiz va Foydalaniş şartlarini qabul qilasiz `[LAWYER: question 2]` |
| Telegram hisobingizni yöqotsangiz, profilga kirişni tiklaş | telefon raqami, agar bizda bölsa | asosiy rozilik `[LAWYER: question 13]`; faqat sörovingiz böyiça |
| Modulga unga kerakli profil maydonlarini beriş | faqat modul röyxatidagi maydonlar (5-bölim) | şu modulga rozilik, har bir modul uçun alohida |
| Modul xabarnomalari (masalan, tadbirlar eʼlonlari) | Telegram identifikatori | şu modul xabarnomalariga rozilik, har bir modul uçun alohida; sukut böyiça berilmagan |
| Profilingizni muayyan kompaniyaga beriş (vakansiya, xakaton vazifasi) | rozilikda nomlangan maydonlar | kompaniya nomlangan alohida rozilik; faqat özingizning harakatingiz bilan beriladi |
| Hamkorlar va homiylar uçun umumlaştirilgan statistika | anonimlaştirilgan agregatlar (6-bölim) | `[LAWYER: question 15 — ground for aggregates]` |

Maʼlumotlaringizni uşbu siyosatda nomlanmagan maqsadlarda işlatmaymiz. Yangi maqsad uçun yangi
rozilik söraymiz.

**Agar tadbirlar botida AI Qadam ID işga tuşişidan oldin röyxatdan ötgan bölsangiz.** Botdagi
profilingiz AI Qadam IDʼga köçirildi. Botda bergan maʼlumotlarga işlov beriş roziligingiz asosiy
rozilik va `events` moduliga rozilik sifatida hisoblanadi; bot xabarnomalariga roziligingiz — `events`
moduli xabarnomalariga rozilik sifatida. Biz ularni qayta söramaymiz: maqsad öşa — AI Qadam
tadbirlarida iştirok etiş. Köçirilgan roziliklar asosida maʼlumotlaringiz boşqa modullarga
berilmaydi. Ularning istalganini sozlamalarda qaytarib olişingiz mumkin (10-bölim).
`[LAWYER: question 7 — is a separate notice needed, and within what period]`

## 5. Modullar nimani oladi

Modul AI Qadam IDʼdan faqat özining tasdiqlangan röyxatidagi maydonlarni va faqat şu modulga
roziligingizdan keyin oladi. Modul röyxatni özi kengaytira olmaydi: buning uçun yangi qaror va
yangi roziligingiz kerak. Bir modulning maʼlumotlari boşqa modullarga berilmaydi.

| Modul | Qaysi profil maydonlarini oladi |
|---|---|
| `events` | Telegram identifikatori; Telegramdagi ism, familiya va `username`; profil uçun ism va familiya; lavozim; kompaniya; şahar; profil töldirilgan sana |
| `ask` (ekspertlar) | profil uçun ism va familiya; lavozim; kompaniya; Telegramdagi `username` |

Telefon raqamini va oxirgi faollik sanasini heç bir modul olmaydi.

**Modullarning öz yozuvlari.** Modullar özlarida siz ulardan qanday foydalanayotganingiz haqidagi
maʼlumotlarni saqlaydi. `events` moduli: röyxatdan ötişlar, çiptalar va qatnaşuv belgilari;
fikr-mulohazalar; viktorina javoblari (javob berilgan paytdagi Telegramdagi ismingiz bilan);
xabarnomalar yetkazilgani haqidagi yozuvlar; bot bilan muloqotning tugallanmagan qadamlari;
taşkilotçilar uçun — huquqlar va takliflar. `ask` moduli: `[OPEN: W07 — what data]`. Bu yozuvlar
modulga rozilikni qaytarib olganingizda va hisobni öçirganingizda öçiriladi (10-bölim).

`[LAWYER: question 1 — whether the modules process data on behalf of the same Operator]`
`[OPEN: W07 — which people see data inside a module: event organisers, the Ask coordinator]`

## 6. Hamkorlar va homiylar

AI Qadam hamkorlari va homiylari na profillarni, na baza köçirmalarini oladi. Biz bazani sotmaymiz
va heç kimga bermaymiz.

Hamkor faqat umumlaştirilgan raqamlarni körişi mumkin: neçta aʼzo, qanday rollar, şaharlar,
tadbirlar. 5 kişidan kam guruh son sifatida ham, uluş sifatida ham körsatilmaydi — son örniga
«5 dan kam» yoziladi. Yaşirin guruhni jami va qöşni qatorlardan hisoblab çiqarib bölmaydi.

Profilingiz muayyan kompaniyaga faqat siz özingiz «profilimni şu kompaniyaga yuboriş» tugmasini
bosgan bölsangiz yetib boradi. Bu kompaniya nomlangan va beriladigan maydonlar sanab ötilgan
alohida rozilik.

## 7. Maʼlumotlarga yana kim kira oladi

**Işlov beruvçilar** — maʼlumotlarni bizning topşiriğimiz bilan saqlaydigan taşkilotlar:

| Işlov beruvçi | Nima qiladi | Qayerda |
|---|---|---|
| `[PROCESSOR: hosting provider (sponsor), name, TIN, address]` | AI Qadam ID va modullar işlaydigan serverlarni taqdim etadi | `[OPEN: data-centre location; per the project — Uzbekistan, not confirmed by a contract]` |
| Cloudflare `[PROCESSOR: full legal entity name, address]` | bazaning şifrlangan zaxira nusxalarini saqlaydi (R2 xizmati) | Yevropa Ittifoqi yurisdiksiyasi, 8-bölim |

`[LAWYER: question 5 — what documents are needed with each processor]`
`[OPEN: O-9 — who hosts the id.aiqadam.org page and runs the domain]`

**Telegram.** Kiriş va bot xabarlari Telegram orqali ötadi. Telegram — öz maxfiylik siyosatiga ega
mustaqil xizmat; u maʼlumotlarga bizning topşiriğimiz bilan işlov bermaydi.
`[LAWYER: question 4(d)]`

**Davlat organlari** — faqat Özbekiston Respublikasi qonunçiligida bevosita nazarda tutilgan
hollarda.

## 8. Maʼlumotlar qayerda saqlanadi. Özbekistondan taşqaridagi nusxa

AI Qadam IDʼning asosiy bazasi hosting provayderining serverlarida saqlanadi `[OPEN: country and
address of the data centre]`.

**Bazaning şifrlangan zaxira nusxasi, şu jumladan profillar, Özbekistondan taşqarida saqlanadi** —
Cloudflare R2 bulutli xotirasida, Yevropa Ittifoqi yurisdiksiyasida. Nusxa yuborilişidan oldin
şifrlanadi; Cloudflareʼda şifrni oçiş kaliti yöq. Kalit `[OPEN: O-7 — who holds the key, without
naming a person]` da saqlanadi. `[LAWYER: question 4 — cross-border transfer and its ground]`

Agar yurist nusxani çet elda saqlaşni nomaqbul deb topsa, nusxa Özbekistonga köçiriladi va uşbu
siyosat yangilanadi.

## 9. Saqlaş muddatlari

| Nima | Qança saqlanadi |
|---|---|
| Profil, roziliklar va roziliklar jurnali | asosiy rozilik amalda bölgan davrda. Agar 3 yil davomida AI Qadamʼdan foydalanmasangiz (kirmasangiz va botlarga murojaat qilmasangiz), profil öçiriladi. Bundan 30 kun oldin sizni Telegramda siz foydalanadigan AI Qadam boti orqali ogohlantiramiz; agar şu vaqt içida kirsangiz yoki botga yozsangiz, profil saqlanib qoladi |
| Telefon raqami | profil bilan birga |
| Modullarning öz yozuvlari | modul qoidalari böyiça, lekin modulga rozilik amalda bölgan va hisob mavjud bölgan muddatdan ortiq emas |
| Modullarga öçiriş sörovini qayta yuboriş uçun Telegram identifikatori | öçirişdan keyin 2 soatgaça; agar modul öçirişni tasdiqlamagan bölsa — tasdiqlagunça, lekin 7 kundan oşmasdan |
| Öçirişlar jurnali | modul öçirişni tasdiqlaganidan keyin 35 kun. Jurnalda profil yöq — faqat Telegram identifikatorining kalitli xeşi (HMAC), modul nomi, holat va ikkita sana |
| Serverdagi zaxira nusxalar | 14 kungaça |
| Cloudflare R2 dagi şifrlangan zaxira nusxalar | 35 kungaça. Nusxalar öçiriş blokirovkasi bilan himoyalangan va u tugagunça nusxani muddatidan oldin öçirib bölmaydi `[OPEN: O-6 — lock period; per the infrastructure documentation, 30 days]` |
| Texnik bajariliş jurnallari | `[OPEN: O-5 — the actual period on the server; platform default 30 days]`. Jurnalga alohida maʼlumotlar, masalan Telegram identifikatori, tuşişi mumkin; profil ötadigan qadamlar jurnalga yozilmaydi |

`[LAWYER: question 3 — are these periods lawful after withdrawal]`

## 10. Rozilikni qaytarib oliş va hisobni öçiriş

Istalgan rozilikni istalgan vaqtda qaytarib oliş mumkin — `id.aiqadam.org` sahifasida (bundan buyon —
«sozlamalarda»); unga havola AI Qadam ID botida `[OPEN: bot name]` bor.

**Asosiy rozilikni qaytarib oliş — bu barça AI Qadam xizmatlarida hisobni öçiriş.** Hisobni
töğridan-töğri ham öçiriş mumkin. Ikkala holatda ham:

1. Tasdiqlaganingizdan söng darhol AI Qadam IDʼdan profilingiz, roziliklaringiz, roziliklar jurnali
   va modul maʼlumotlarini öçiramiz.
2. Şu zahoti siz rozilik bergan har bir modul öçiriş sörovini oladi va siz haqingizdagi
   yozuvlarini öçiradi (5-bölim), şu jumladan, agar bölsa, taşkilotçi huquqlari va
   takliflarini. Agar modul öçirişni tasdiqlamasa, sörov bir soat davomida har 5 daqiqada
   takrorlanadi. Agar bir soatdan keyin ham tasdiq bölmasa, Operatorning masʼul şaxsi xabar oladi
   va moduldagi sababni bartaraf etadi, sörov esa modul tasdiqlagunça har soatda takrorlanadi —
   sörovingizdan keyin 3 iş kunidan keçiktirmay.
3. Zaxira nusxalarda maʼlumotlaringiz nusxaning saqlaş muddati tugagunça qoladi (9-bölim):
   serverda 14 kungaça va Cloudflare R2 da 35 kungaça. Bitta odamni nusxadan tanlab öçirib
   bölmaydi. Agar baza qaçondir nusxadan tiklansa, maʼlumotlaringiz qaytmasligi uçun öçirişlar
   jurnalini qayta qöllaymiz.

Öçirişni qaytarib bölmaydi. Qaytsangiz, yangi profil yaratiladi va roziliklarni qaytadan beriş
kerak böladi.

**Modulga rozilikni qaytarib oliş.** Modul siz haqingizdagi yozuvlarini (5-bölim) 2- va 3-bandlardagi
tartib va muddatlarda öçiradi va AI Qadam IDʼdan maʼlumotlaringizni olişni töxtatadi. Bu moduldan
foydalana olmaysiz va uning xabarnomalarini olmaysiz. AI Qadam ID profilingiz va boşqa modullarga
taʼsir qilmaydi.

**Xabarnomalarga rozilikni qaytarib oliş.** Modul sizga xabarnomalar yuborişni töxtatadi. Xizmat
işlaşi uçun zarur xabarlar (masalan, tadbir çiptasi) xabarnoma hisoblanmaydi va kelişda davom
etadi.

## 11. Huquqlaringiz va ulardan qanday foydalaniş

Siz quyidagi huquqlarga egasiz:

- bizda maʼlumotlaringiz bor-yöqligini va qaysilari ekanini biliş;
- sörov böyiça ularga işlov beriş haqida maʼlumot oliş;
- maʼlumotlaringizni özgartiriş yoki töldiriş;
- istalgan rozilikni qaytarib oliş;
- hisobingizni öçiriş;
- harakatlarimiz ustidan vakolatli davlat organiga `[LAWYER: question 14 — name of the body]` yoki
  sudga şikoyat qiliş.

Profil, roziliklar va hisobni öçiriş sizga sozlamalarda mavjud. Boşqa sörovlarni, şu jumladan
kirişni tiklaş böyiça, privacy@aiqadam.org manziliga
yuboring. Maʼlumotlarni begona şaxsga oşkor qilmaslik uçun sörov Telegram hisobi egasidan
kelayotganini tekşiramiz. `[LAWYER: question 14 — period under the law]` içida javob beramiz.

## 12. Voyaga yetmaganlar

AI Qadam ID 18 yoşga tölgan şaxslar uçun möljallangan. Profil yaratişdan oldin 18 yoşga
tölganingizni tasdiqlaşingizni söraymiz; aks holda profil yaratilmaydi va heç narsa saqlanmaydi.
Agar profil 18 yoşga tölmagan şaxsga tegişli ekanini bilsak, uni öçiramiz.
`[LAWYER: question 6 — is self-declaration enough]`

## 13. Maʼlumotlarni himoya qiliş

- AI Qadam ID bazasiga faqat Operatorning bitta vakolatli şaxsi kira oladi.
- Modullar AI Qadam IDʼga imzolangan sörovlar bilan murojaat qiladi; har bir modul — öz kaliti
  bilan.
- Tizimning texnik qadamlaridan butun profil emas, faqat kerakli maydonlar ötadi; şaxsga doir
  maʼlumotlar ötadigan qadamlar bajariliş jurnaliga yozilmaydi.
- Zaxira nusxalar xotiraga yuborilişidan oldin şifrlanadi.

Agar maʼlumotlaringizga taʼsir qilişi mumkin bölgan sizib çiqiş yuz bersa, bu haqda vakolatli
organga qonunda belgilangan muddatda, sizga esa Telegramda AI Qadam boti orqali xabar beramiz.
`[OPEN: owner's decision on notifying members; LAWYER: question 4(e) — periods]`

## 14. Siyosatdagi özgarişlar

Uşbu siyosatning har bir tahriri va har bir rozilik matni versiya raqamiga ega. Siz qaysi versiyani
qabul qilganingizni saqlaymiz. Muhim özgarişlar haqida Telegramda AI Qadam botlari orqali va `id.aiqadam.org`
sahifasida oldindan xabar beramiz `[OPEN: how many days]`. Agar işlov beriş maqsadlari, modulga
beriladigan maʼlumotlar tarkibi yoki oluvçilar özgarsa, yangi rozilik söraymiz; usiz maʼlumotlar
yangi maqsad uçun işlatilmaydi.

## 15. Til

Siyosat özbek, rus va ingliz tillarida eʼlon qilinadi. Tahrirlar örtasida farq bölsa, özbek
tilidagi tahrir qöllaniladi. `[LAWYER: question 12]`

## 16. Aloqa

`[OPERATOR: name, TIN/PINFL, address]`
Elektron poçta: privacy@aiqadam.org
