export const CAREERS_URL = "/get-involved/careers";
export const recruitment = {
  title: "Full-Time Secondary School Teachers",
  academicYear: 2027,
  employmentType: "Full-Time",
  description: "Qualified, dedicated and enthusiastic teachers for O-Level, A-Level or both, supporting our planned Advanced Level expansion beginning with Senior Five (S.5) in 2027.",
  deadline: "2027-01-15",
  deadlineLabel: "Friday, 15 January 2027",
  // Midnight following the deadline in Africa/Kampala (UTC+03:00).
  closesAt: "2027-01-16T00:00:00+03:00",
  email: "asabamemorialhighschool@gmail.com",
  subjects: ["English Language", "History", "Geography", "Mathematics", "Biology", "Chemistry", "Physics", "Agriculture", "Art", "Entrepreneurship / Economics", "Christian Religious Education (CRE) / Divinity", "Computer Studies / ICT"],
  requirements: ["A recognised Diploma in Education or equivalent professional teaching qualification.", "Registration with the relevant teaching authorities in Uganda.", "Strong subject knowledge and effective lesson delivery.", "Good classroom management and communication skills.", "Commitment to student-centred teaching and students’ academic and personal development.", "Willingness to participate in extracurricular activities and contribute to the wider school community."],
  advantages: ["A Bachelor’s Degree in Education or a relevant teaching field.", "Experience teaching at both O-Level and A-Level."],
  documents: ["An application letter.", "Copies of relevant academic and professional qualifications.", "An updated curriculum vitae (CV)."],
  applicationMethods: ["Email", "Hand delivery"],
  advertisement: "/documents/AMHS_Teacher_Recruitment_Advert_2027.pdf",
};

export function vacancyStatus(now = new Date()) {
  const open = now.getTime() < Date.parse(recruitment.closesAt);
  return { open, archived: !open, label: open ? "Applications Open" : "Applications Closed" };
}

export function buildEmailSubject(name: string, subjects: string[], qualification: string) {
  return `${name.trim()} - ${subjects.join(" & ")} - ${qualification.trim()}`;
}

export function subjectErrors(name: string, subjects: string[], qualification: string) {
  return {
    name: !name.trim(),
    subjects: new Set(subjects.filter(subject => recruitment.subjects.includes(subject))).size < 2,
    qualification: !qualification.trim(),
  };
}

export function applicationMailto(subject: string) {
  return `mailto:${recruitment.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Dear School Administration,\n\nPlease find attached my application letter, updated CV and copies of relevant academic and professional qualifications.\n\nKind regards")}`;
}

export function applicationGmail(subject: string) {
  const mailto = new URL(applicationMailto(subject));
  const query = new URLSearchParams({ view: "cm", fs: "1", to: recruitment.email, su: subject, body: mailto.searchParams.get("body") ?? "" });
  return `https://mail.google.com/mail/?${query.toString()}`;
}
