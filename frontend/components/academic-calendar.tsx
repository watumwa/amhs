import { PolicyIcon } from "./school-policies";
import styles from "./academic-calendar.module.css";

const calendarPdf = "/documents/AMHS_Academic_Calendar_2027.pdf";
const terms = [
  { term: "Term I", opening: "1 February 2027", openingIso: "2027-02-01", closing: "30 April 2027", closingIso: "2027-04-30", days: 89 },
  { term: "Term II", opening: "24 May 2027", openingIso: "2027-05-24", closing: "20 August 2027", closingIso: "2027-08-20", days: 89 },
  { term: "Term III", opening: "13 September 2027", openingIso: "2027-09-13", closing: "3 December 2027", closingIso: "2027-12-03", days: 82 },
];
const holidays = [
  { term: "Term I", from: "1 May 2027", fromIso: "2027-05-01", to: "23 May 2027", toIso: "2027-05-23", days: 23 },
  { term: "Term II", from: "21 August 2027", fromIso: "2027-08-21", to: "12 September 2027", toIso: "2027-09-12", days: 23 },
  { term: "Term III", from: "4 December 2027", fromIso: "2027-12-04", to: "30 January 2028", toIso: "2028-01-30", days: 58 },
];

export function AcademicCalendar() {
  return <section className={`container ${styles.section}`} id="calendar-2027" aria-labelledby="calendar-2027-heading">
    <p className="eyebrow"><span /> Ministry of Education and Sports · 2027</p>
    <h2 id="calendar-2027-heading">2027 Provisional School Academic Calendar</h2>
    <p className={styles.intro}>The 2027 Provisional School Academic Calendar outlines the official school term dates, term holidays and reporting dates as provided in the Ministry of Education and Sports calendar.</p>

    <div className={styles.tableScroll} role="region" aria-labelledby="term-dates-caption" tabIndex={0}>
      <table>
        <caption id="term-dates-caption">School term dates</caption>
        <thead><tr><th scope="col">Term</th><th scope="col">Opening date</th><th scope="col">Closing date</th><th scope="col">Duration</th></tr></thead>
        <tbody>{terms.map(term => <tr key={term.term}><th scope="row">{term.term}</th><td><time dateTime={term.openingIso}>{term.opening}</time></td><td><time dateTime={term.closingIso}>{term.closing}</time></td><td>{term.days} days</td></tr>)}</tbody>
        <tfoot><tr><th scope="row" colSpan={3}>Total</th><td>260 days</td></tr></tfoot>
      </table>
    </div>

    <div className={styles.tableScroll} role="region" aria-labelledby="holidays-caption" tabIndex={0}>
      <table>
        <caption id="holidays-caption">Term holidays</caption>
        <thead><tr><th scope="col">Holiday</th><th scope="col">From</th><th scope="col">To</th><th scope="col">Duration</th></tr></thead>
        <tbody>{holidays.map(holiday => <tr key={holiday.term}><th scope="row">{holiday.term}</th><td><time dateTime={holiday.fromIso}>{holiday.from}</time></td><td><time dateTime={holiday.toIso}>{holiday.to}</time></td><td>{holiday.days} days</td></tr>)}</tbody>
      </table>
    </div>

    <div className={styles.tableScroll} role="region" aria-labelledby="reporting-caption" tabIndex={0}>
      <table>
        <caption id="reporting-caption">Reporting dates</caption>
        <thead><tr><th scope="col">Class</th><th scope="col">Reporting date</th></tr></thead>
        <tbody><tr><th scope="row">Senior One (S.1)</th><td><time dateTime="2027-02-08">8 February 2027</time></td></tr><tr><th scope="row">Senior Five (S.5)</th><td><time dateTime="2027-02-15">15 February 2027</time></td></tr></tbody>
      </table>
    </div>

    <div className={styles.actions}>
      <a className={`button button-navy ${styles.download}`} href={calendarPdf} download="AMHS_Academic_Calendar_2027.pdf"><PolicyIcon type="download" /><span>Download 2027 Academic Calendar (PDF)</span></a>
      <a className="text-link" href={calendarPdf} target="_blank" rel="noopener noreferrer">View Calendar PDF<span className={styles.srOnly}> (opens in a new tab)</span></a>
    </div>
  </section>;
}
