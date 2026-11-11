export type Policy = { id: string; title: string; description: string; focusAreas: string[]; availability: "download" | "request"; document?: string; downloadLabel?: string; emailSubject?: string };

export const policies: Policy[] = [
  {
    "id": "safeguarding",
    "title": "Child Protection & Safeguarding Policy",
    "description": "Asaba Memorial High School is committed to providing a safe, protective and supportive environment where the rights, dignity and wellbeing of every learner are respected. This policy establishes the school's approach to preventing, identifying, reporting and responding to child protection and safeguarding concerns.",
    "focusAreas": [
      "Child protection and safeguarding responsibilities",
      "Prevention of abuse, exploitation and neglect",
      "Identification and reporting of safeguarding concerns",
      "Appropriate professional boundaries",
      "Learner safety and wellbeing",
      "Safeguarding accountability and response procedures"
    ],
    "availability": "download",
    "document": "/documents/AMHS_Child_Protection_and_Safeguarding_Policy_2026.pdf",
    "downloadLabel": "Download Safeguarding Policy"
  },
  {
    "id": "students",
    "title": "Students' Code of Conduct",
    "description": "The Students' Code of Conduct outlines the standards of behaviour, discipline, respect and responsibility expected of learners at Asaba Memorial High School. It promotes positive relationships, academic commitment, personal integrity and a school environment conducive to learning.",
    "focusAreas": [
      "Student rights and responsibilities",
      "Respect for staff, fellow learners and school property",
      "Attendance and punctuality",
      "Academic honesty and discipline",
      "Appropriate behaviour and personal conduct",
      "Behaviour management and disciplinary procedures"
    ],
    "availability": "download",
    "document": "/documents/AMHS_Student_Code_of_Conduct_2026.pdf",
    "downloadLabel": "Download Students' Code of Conduct"
  },
  {
    "id": "staff",
    "title": "Staff Code of Conduct",
    "description": "The Staff Code of Conduct provides professional and ethical standards guiding all employees of Asaba Memorial High School. It promotes integrity, accountability, responsible professional relationships and a safe and respectful working and learning environment.",
    "focusAreas": [
      "Professional ethics and integrity",
      "Staff responsibilities and accountability",
      "Respectful workplace relationships",
      "Professional boundaries with learners",
      "Confidentiality and responsible communication",
      "Compliance with institutional policies"
    ],
    "availability": "download",
    "document": "/documents/AMHS_Staff_Code_of_Conduct_2026.pdf",
    "downloadLabel": "Download Staff Code of Conduct"
  },
  {
    "id": "admissions",
    "title": "Admissions Policy",
    "description": "The Admissions Policy outlines the school's approach to student admission, including application procedures, eligibility considerations, required documentation and communication with prospective learners and parents.",
    "focusAreas": [
      "Admission procedures",
      "Application requirements",
      "Eligibility and placement considerations",
      "Parent and guardian communication",
      "Fairness and transparency in admissions"
    ],
    "availability": "request",
    "emailSubject": "Request for AMHS Admissions Policy"
  },
  {
    "id": "boarding",
    "title": "Boarding Policy",
    "description": "The Boarding Policy provides a framework for the welfare, supervision, safety and responsible conduct of learners residing within the school's boarding facilities.",
    "focusAreas": [
      "Boarding student welfare",
      "Dormitory conduct and supervision",
      "Safety and security",
      "Hygiene and personal responsibility",
      "Boarding routines and expectations",
      "Communication with parents and guardians"
    ],
    "availability": "request",
    "emailSubject": "Request for AMHS Boarding Policy"
  },
  {
    "id": "anti-bullying",
    "title": "Anti-Bullying Policy",
    "description": "The Anti-Bullying Policy communicates the school's commitment to preventing bullying, promoting respectful relationships and addressing concerns that may affect learners' dignity, safety and wellbeing.",
    "focusAreas": [
      "Prevention of bullying and harassment",
      "Physical, verbal, social and online bullying",
      "Reporting concerns",
      "Learner protection and support",
      "Appropriate intervention and follow-up",
      "Positive school relationships"
    ],
    "availability": "request",
    "emailSubject": "Request for AMHS Anti-Bullying Policy"
  },
  {
    "id": "ict",
    "title": "ICT/Internet Policy",
    "description": "The ICT/Internet Policy provides guidance on responsible, safe and educational use of digital technologies, school ICT facilities and internet resources.",
    "focusAreas": [
      "Responsible technology use",
      "Internet safety and digital citizenship",
      "Appropriate online conduct",
      "Protection of school ICT resources",
      "Privacy and information security",
      "Misuse of digital devices and systems"
    ],
    "availability": "request",
    "emailSubject": "Request for AMHS ICT/Internet Policy"
  },
  {
    "id": "health-safety",
    "title": "Health & Safety Policy",
    "description": "The Health & Safety Policy addresses the school's approach to maintaining a healthy and safe environment for learners, staff and visitors.",
    "focusAreas": [
      "School environmental safety",
      "Hygiene and sanitation",
      "Accident and incident reporting",
      "Emergency preparedness",
      "Health-related responsibilities",
      "Risk prevention and management"
    ],
    "availability": "request",
    "emailSubject": "Request for AMHS Health & Safety Policy"
  },
  {
    "id": "academic",
    "title": "Academic Policy",
    "description": "The Academic Policy provides a framework for teaching, learning, assessment, academic expectations and the continuous improvement of educational standards at AMHS.",
    "focusAreas": [
      "Teaching and learning expectations",
      "Academic assessment",
      "Homework and assignments",
      "Learner academic responsibilities",
      "Academic integrity",
      "Monitoring learner progress"
    ],
    "availability": "request",
    "emailSubject": "Request for AMHS Academic Policy"
  },
  {
    "id": "complaints",
    "title": "Complaints Procedure",
    "description": "The Complaints Procedure provides guidance on how learners, parents, staff and other stakeholders may raise concerns or complaints and seek appropriate consideration and resolution through the school administration.",
    "focusAreas": [
      "Submission of complaints",
      "Appropriate reporting channels",
      "Fair and respectful handling of concerns",
      "Confidentiality where appropriate",
      "Communication and follow-up",
      "Resolution and escalation procedures"
    ],
    "availability": "request",
    "emailSubject": "Request for AMHS Complaints Procedure"
  }
];

export function policyRequestHref(policy: Policy) {
  const body = `Dear AMHS Administration,\r\n\r\nI would like to request a copy of the ${policy.title} for my reference.\r\n\r\nKindly advise on how I can obtain the document.\r\n\r\nThank you.\r\n\r\nName:\r\nContact Information:`;
  return `mailto:asabamemorialhighschool@gmail.com?subject=${encodeURIComponent(policy.emailSubject ?? '')}&body=${encodeURIComponent(body)}`;
}
