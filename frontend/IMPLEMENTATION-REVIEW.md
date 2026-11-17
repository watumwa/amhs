# AMHS recruitment and religious fellowships updates

Implemented locally for review on 17 November 2026. No Git commit, push or deployment was performed.

## Pages and navigation

- `/get-involved/careers`: Careers & Job Opportunities, under Get Involved. Existing submenu entries remain.
- `/student-life/religious-fellowships`: Religious Fellowships, under Student Life. The previous Student Life destination remains available as Student Life overview; Clubs and Societies is also accessible in this submenu.
- `/associations-and-clubs`: existing content retained, with a concise factual religious-clubs introduction and Explore Religious Fellowships link.
- Both new pages have specific titles and descriptions. No existing sitemap implementation was found.

## Careers

The permanent page contains the complete 2027 teaching advertisement, all twelve official subject areas, the planned S.5 expansion, O-Level/A-Level eligibility, the equal-opportunity statement, minimum requirements separated from added advantages, applicant information, and the three required documents.

Shared structured vacancy data supplies the Careers page, homepage announcement and news announcement. Applications remain open throughout Friday, 15 January 2027 in Uganda. They close at 00:00 on 16 January 2027 in UTC+03:00, equivalent to 21:00 UTC on 15 January. The vacancy then remains archived with Applications Closed. Application controls are replaced, and the temporary homepage announcement disappears. Client status checks also update pages left open across the deadline. The homepage, Careers page and news announcement render current status on the server; other existing content pages retain static rendering.

The email subject generator uses native labelled text fields, keyboard-accessible checkboxes, inline validation, a live preview, clipboard feedback and a selectable fallback when clipboard access fails. At least two distinct advertised subject areas are required. Qualifications are free text with illustrative suggestions. The output uses `Full Name - Teaching Subjects - Qualification`. The email action encodes the recipient, subject and attachment reminder into a mailto URL. It opens a draft and clearly explains that the applicant must attach documents and send it. Nothing is uploaded or stored by the tool.

The separate hand-delivery card gives the exact Kitanyata Trading Centre, Kiruli Sub-county, Masindi location, addresses applications to School Administration, and specifies the envelope contents and dash-separated identification format. Its example is selectable for copying. No office hours, receiving officer, postal submission arrangement, fee or additional mandatory document was added.

The safeguarding section explains prohibited conduct and the requirement to read, understand and sign the policy and staff code before work begins. `/school-policies` and both existing policy PDFs were verified; the PDF files were not changed.

## Fellowships

The page follows the supplied Scripture Union document. It presents both Christian Scripture Union and Muslim Club, their values and activities, religious inclusion and mutual respect. CSU meetings are Tuesday at 4:00 p.m. and Sunday at 10:00 a.m. Outreach is described as visits, prayer and encouragement. Muslim observances include Jumu’ah, Eid al-Fitr and Eid al-Adha, without an invented meeting schedule.

The support section includes Bibles, Qur’ans, learning materials, musical instruments, voluntary spiritual guidance and mentorship, and Christmas/Eid meals and refreshments. Its button uses the verified existing `DONATION_URL`, `/donate`. Payment information and donation procedures were not changed. Official email and WhatsApp contact links are included.

## Homepage and news

The compact homepage notice appears beneath the existing hero while applications are open. The existing `/news-and-events` page has a concise recruitment announcement pointing to Careers for authoritative instructions, retained as an archived announcement after closure. Existing content and WhatsApp components were preserved.

## Download status

Both authoritative Word source documents were inspected. There is no approved recruitment PDF in `public/documents`. The existing Teacher Advert Word document does not contain the approved hand-delivery and email-subject amendments. No official document was modified or new PDF claimed. The download area therefore explains that the updated PDF is unavailable and exposes no broken link.

Intended future approved asset: `frontend/public/documents/AMHS_Teacher_Recruitment_Advert_2027.pdf`. Once a matching approved PDF is supplied and verified, its public path can be configured in `content/vacancies.ts`.

## Verification

- `npm run lint`: passed. This project's lint script is TypeScript checking (`tsc --noEmit`); no separate ESLint script is configured.
- `npm run build`: passed, including TypeScript and prerendering. The first sandboxed attempt compiled but encountered `spawn EPERM` starting a worker; the permitted rerun completed successfully.
- `node --test --test-isolation=none tests/recruitment.test.cjs`: four tests passed. Covers the precise Uganda deadline boundary, archive status, missing/duplicate/unadvertised subject validation, prescribed subject output, special-character mailto round-trip, twelve unique subjects and policy asset existence. Uses Node 24's built-in TypeScript support; no testing dependency was added. Isolation is disabled because sandbox child-process spawning is restricted.
- Production HTTP smoke checks: `/`, both new pages, `/news-and-events`, `/associations-and-clubs`, `/donate` and `/school-policies` returned 200. Content, schedules, integration links and both policy downloads were checked. Downloads returned 200 with valid PDF signatures.
- `git diff --check`: passed.
- Responsive CSS stacks cards and subject grids on small screens, wraps long text and provides visible focus states. Native controls preserve keyboard operation. No new imagery or dependencies were introduced.

Verification limit: browser automation was unavailable. Actual clipboard permission behavior, opening an external email application, visual layout on Android/iPhone/tablet, and live navigation/WhatsApp interactions still need browser review. These are not reported as manually verified. Existing WhatsApp source was unchanged.

## Files created

- `app/get-involved/careers/page.tsx`
- `app/student-life/religious-fellowships/page.tsx`
- `components/email-subject-generator.tsx`
- `components/recruitment-status.tsx`
- `components/recruitment.module.css`
- `content/vacancies.ts`
- `tests/recruitment.test.cjs`
- `IMPLEMENTATION-REVIEW.md`

## Files modified

- `components/header.tsx`
- `app/page.tsx`
- `app/[slug]/page.tsx`

Paths above are relative to `frontend/`. Pre-existing edits in root `content.md` and the two supplied untracked Word documents were preserved. Next.js generated type-reference changes from the build were restored to avoid an unrelated tracked change.

The updated approved PDF remains unavailable; the supplied Word advert is now downloadable as requested. No other content decision is required to review this local implementation.

## Follow-up: original advert download and email actions

- Added a download of the unchanged supplied `Teacher Advert 2027 edited.docx`, clearly labelled as a Word document. The page explains that the additional email-subject and hand-delivery instructions apply alongside the original advert.
- Made the displayed email address clickable while applications are open.
- Improved required-field validation to focus the first missing input or the subject selection group.
- Added Open in Gmail alongside Apply by Email, with matching encoded recipient, subject and body, and guidance if the default email application does not open. Both generator actions retain validation and deadline checks. Opening a draft does not send an application.
- Verification: five focused tests, TypeScript check and production build passed. A headless Chrome check verified missing-field focus, two-subject validation, generated mailto/Gmail URLs, actual clipboard copying, and the downloadable Word file matching the source bytes. No email was sent, and no user account was signed into.

## PDF download replacement

The Careers download now points to the supplied `/documents/Teacher%20Advert%202027%20edited.pdf`, labelled Download the Job Advert (PDF). The Word download and unavailable-PDF message were removed. The supplied PDF includes email and physical submission methods and the correct deadline; the page continues to provide the mandatory email-subject instructions. The original source files were not altered.

The recruitment PDF was renamed to `AMHS_Teacher_Recruitment_Advert_2027.pdf`. The Careers link now says View the Job Advert (PDF, opens in a new tab), uses a new tab and no longer forces a download.
