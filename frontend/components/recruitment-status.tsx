"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CAREERS_URL, recruitment, vacancyStatus } from "../content/vacancies";
import styles from "./recruitment.module.css";

export function useVacancyOpen(initialOpen: boolean) {
  const [open, setOpen] = useState(initialOpen);
  useEffect(() => {
    const update = () => setOpen(vacancyStatus().open);
    update();
    const interval = window.setInterval(update, 1000);
    window.addEventListener("focus", update);
    return () => { window.clearInterval(interval); window.removeEventListener("focus", update); };
  }, []);
  return open;
}

export function VacancyBadge({ initialOpen }: { initialOpen: boolean }) {
  const open = useVacancyOpen(initialOpen);
  return <span className={styles.status}>{open ? "Applications Open" : "Applications Closed · Archived Vacancy"}</span>;
}

export function RecruitmentNotice({ initialOpen, news = false }: { initialOpen: boolean; news?: boolean }) {
  const open = useVacancyOpen(initialOpen);
  if (!news && !open) return null;
  return <section className={`container ${styles.notice}`} aria-label="Teacher recruitment"><article className={`${styles.card} ${styles.highlight}`}>
    <p className="eyebrow">{open ? "Job vacancy announcement" : "Archived vacancy · Applications Closed"}</p>
    <h2>{news ? `${recruitment.title} — ${recruitment.academicYear}` : "We’re Recruiting Teachers for 2027"}</h2>
    <p>{news ? recruitment.description : "Join the AMHS teaching team and help shape the future of our learners."}</p>
    <p><strong>Application Deadline: {recruitment.deadlineLabel}</strong></p>
    <Link className="button button-navy" href={CAREERS_URL}>{news ? "View Vacancy Details" : "View Job Opportunities"}</Link>
  </article></section>;
}
