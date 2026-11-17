const assert = require("node:assert/strict");
const { test } = require("node:test");
const { existsSync, readFileSync } = require("node:fs");
const path = require("node:path");
const { recruitment, vacancyStatus, buildEmailSubject, applicationMailto, applicationGmail, subjectErrors } = require("../content/vacancies.ts");

test("vacancy remains open for the entire Uganda deadline date and archives at midnight", () => {
  assert.equal(vacancyStatus(new Date("2027-01-15T20:59:59.999Z")).open, true);
  const closed = vacancyStatus(new Date("2027-01-15T21:00:00Z"));
  assert.deepEqual(closed, { open: false, archived: true, label: "Applications Closed" });
  assert.equal(vacancyStatus(new Date("2028-01-01T00:00:00Z")).open, false);
});

test("missing information, a single subject and duplicate subjects are rejected", () => {
  assert.deepEqual(subjectErrors(" ", [], " "), { name: true, subjects: true, qualification: true });
  assert.equal(subjectErrors("Kato John", ["Mathematics"], "Diploma in Education").subjects, true);
  assert.equal(subjectErrors("Kato John", ["Mathematics", "Mathematics"], "Diploma in Education").subjects, true);
  assert.equal(subjectErrors("Kato John", ["Mathematics", "Unadvertised"], "Diploma in Education").subjects, true);
  assert.deepEqual(subjectErrors("Kato John", ["Mathematics", "Physics"], "Bachelor of Education"), { name: false, subjects: false, qualification: false });
});

test("subject uses the prescribed dash separators and mailto preserves special characters", () => {
  assert.equal(buildEmailSubject(" Kato John ", ["Mathematics", "Physics"], " Bachelor of Education "), "Kato John - Mathematics & Physics - Bachelor of Education");
  const subject = buildEmailSubject("Amina O’Neil", ["Entrepreneurship / Economics", "Computer Studies / ICT"], "Bachelor of Arts & Education");
  const link = new URL(applicationMailto(subject));
  assert.equal(link.pathname, recruitment.email);
  assert.equal(link.searchParams.get("subject"), subject);
  assert.match(link.searchParams.get("body"), /application letter, updated CV/);
  assert.equal(subject.includes("|"), false);
});

test("all twelve advertised subject areas are unique and policy download assets exist", () => {
  assert.equal(recruitment.subjects.length, 12);
  assert.equal(new Set(recruitment.subjects).size, 12);
  for (const file of ["AMHS_Child_Protection_and_Safeguarding_Policy_2026.pdf", "AMHS_Staff_Code_of_Conduct_2026.pdf"]) {
    assert.ok(existsSync(path.resolve(__dirname, "../public/documents", file)));
  }
  const advert = path.resolve(__dirname, "../public", decodeURIComponent(recruitment.advertisement).slice(1));
  assert.ok(existsSync(advert));
  assert.equal(readFileSync(advert).subarray(0, 5).toString(), "%PDF-");
});

test("browser Gmail alternative prefills the same recipient, subject and body as mailto", () => {
  const subject = buildEmailSubject("Kato John", ["Mathematics", "Physics"], "Bachelor of Education");
  const gmail = new URL(applicationGmail(subject));
  const mailto = new URL(applicationMailto(subject));
  assert.equal(gmail.origin, "https://mail.google.com");
  assert.equal(gmail.searchParams.get("view"), "cm");
  assert.equal(gmail.searchParams.get("to"), recruitment.email);
  assert.equal(gmail.searchParams.get("su"), subject);
  assert.equal(gmail.searchParams.get("body"), mailto.searchParams.get("body"));
});
