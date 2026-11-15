export const compulsorySubjects = [
  { name: "English Language", description: "Communication, reading, writing and language proficiency." },
  { name: "Mathematics", description: "Numeracy, logical reasoning and problem-solving." },
  { name: "Biology", description: "Living organisms, biological processes and the environment." },
  { name: "Chemistry", description: "Matter, substances, chemical processes and practical applications." },
  { name: "Physics", description: "Energy, forces, motion and physical phenomena." },
  { name: "Geography", description: "Physical and human environments and their relationships." },
  { name: "History & Political Education", description: "Historical understanding, citizenship and governance." },
  { name: "Entrepreneurship Education", description: "Enterprise skills, creativity and financial awareness." },
  { name: "Kiswahili", description: "Language communication and regional interaction." },
  { name: "Physical Education", description: "Physical fitness, teamwork and healthy living." },
  { name: "Religious Education", description: "Moral reflection, values and religious understanding." },
] as const;

export const seniorCompulsorySubjects = compulsorySubjects.slice(0, 7);

export const electiveSubjects = [
  { name: "Agriculture", description: "Developing agricultural knowledge, practical production skills and awareness of sustainable resource management." },
  { name: "Information and Communication Technology (ICT)", description: "Building digital literacy, responsible technology use and foundational computing skills." },
  { name: "Literature in English", description: "Developing literary appreciation, interpretation, critical thinking and effective expression." },
  { name: "Art and Design", description: "Encouraging creativity, visual communication, design thinking and artistic expression." },
] as const;

export const curriculumPrinciples = [
  { title: "Competency-Based Learning", text: "Developing the ability to apply knowledge, skills and understanding in practical situations." },
  { title: "Learner-Centred Education", text: "Encouraging active participation, inquiry, discussion and independent thinking." },
  { title: "Values and Character Development", text: "Promoting responsibility, integrity, respect, discipline and positive citizenship." },
  { title: "Preparation for the Future", text: "Building foundations for further education, lifelong learning and productive participation in society." },
] as const;

export const learningJourney = [
  { year: "S.1", title: "Senior One", subtitle: "Building Strong Foundations", text: "Senior One introduces learners to secondary education and establishes essential foundations in academic knowledge, communication, numeracy, scientific understanding, study habits and personal responsibility.", focus: ["Transition into secondary education", "Foundational subject knowledge", "Effective study habits", "Communication and teamwork", "Confidence and personal development"] },
  { year: "S.2", title: "Senior Two", subtitle: "Strengthening Knowledge and Competencies", text: "Senior Two builds upon the foundations established in Senior One, encouraging learners to deepen their subject understanding, strengthen practical competencies and develop greater independence in learning.", focus: ["Deeper subject understanding", "Practical application of knowledge", "Problem-solving and critical thinking", "Collaborative learning", "Preparation for elective subject choices"] },
  { year: "S.3", title: "Senior Three", subtitle: "Developing Academic Focus", text: "Senior Three provides opportunities for more focused academic development as learners continue with compulsory subjects and pursue selected electives in accordance with the national curriculum framework.", focus: ["Focused subject learning", "Elective subject development", "Research and inquiry", "Practical assignments", "Continuous assessment"] },
  { year: "S.4", title: "Senior Four", subtitle: "Preparing for UCE and Beyond", text: "Senior Four consolidates the knowledge, skills and competencies developed throughout the O-Level programme. Learners prepare for the Uganda Certificate of Education examinations while strengthening their readiness for further education and future opportunities.", focus: ["Curriculum consolidation", "Examination preparation", "Competency demonstration", "Academic guidance", "Preparation for post-O-Level educational pathways"] },
] as const;

export const teachingApproaches = [
  { title: "Interactive Classroom Learning", text: "Encouraging participation, discussion and meaningful engagement with subject content." },
  { title: "Practical Learning", text: "Connecting academic concepts with relevant practical experiences and real-life situations." },
  { title: "Critical Thinking and Problem-Solving", text: "Developing the ability to analyse information, evaluate ideas and make informed decisions." },
  { title: "Collaboration and Communication", text: "Strengthening teamwork, respectful dialogue and effective expression." },
  { title: "Creativity and Innovation", text: "Encouraging learners to generate ideas, explore solutions and approach challenges creatively." },
  { title: "Independent Learning", text: "Supporting personal responsibility, reading habits, research and effective study practices." },
] as const;

export const competencies = [
  { title: "Critical thinking and problem-solving", text: "Consider evidence, identify challenges and develop thoughtful solutions." },
  { title: "Creativity and innovation", text: "Explore ideas and find different ways to respond to practical challenges." },
  { title: "Communication", text: "Express ideas clearly and listen carefully to the perspectives of others." },
  { title: "Collaboration", text: "Work with others, share responsibility and contribute to common goals." },
  { title: "Self-directed learning", text: "Set learning goals, reflect on progress and develop effective study habits." },
  { title: "Mathematical and digital literacy", text: "Use numbers, information and technology thoughtfully and responsibly." },
  { title: "Personal responsibility", text: "Make considered choices and take ownership of learning and behaviour." },
  { title: "Citizenship and respect for others", text: "Value different perspectives and contribute positively to the community." },
] as const;

export const curriculumResources = [
  { title: "National Curriculum Development Centre (NCDC)", description: "National curriculum information, guidance and learning resources.", href: "https://ncdc.go.ug/" },
  { title: "Uganda National Examinations Board (UNEB)", description: "Official examination information, assessment notices and candidate guidance.", href: "https://uneb.ac.ug/" },
  { title: "Ministry of Education and Sports", description: "National education policy, information and official updates.", href: "https://www.education.go.ug/" },
  { title: "NCDC Lower Secondary Curriculum Framework", description: "Access the curriculum framework on the official NCDC website.", href: "https://ncdc.go.ug/books/curriculum-framework/" },
  { title: "UNEB continuous assessment guidance — 2026", description: "The official circular for handling continuous assessment in Senior Three and Senior Four in 2026.", href: "https://ereg.uneb.ac.ug/files/CASubmissionCircular.pdf" },
  { title: "UNEB project assessment guidance", description: "UNEB explains the purpose of project work and its separate reporting on the certificate.", href: "https://uneb.ac.ug/2025/04/15/project_theme_for_s3_2025/" },
] as const;
