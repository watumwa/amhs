import Link from "next/link";
import { notFound } from "next/navigation";
import { AdmissionForm } from "../../components/admission-form";
import { Arrow } from "../../components/icons";
import { GivingOptions } from "../../components/giving-options";
import { BankAccountCard, BankAccountSection, SchoolFeesPaymentSection } from "../../components/bank-account";
import { ExchangeForm } from "../../components/exchange-form";
import { governanceProfiles, peopleProfiles, studentLeaders, type Profile } from "../../content/people";

type PageSection = { title: string; body?: string[]; items?: string[] };
type DocumentDownload = { label: string; href: string; description: string };
type PageInfo = { label: string; title: string; emphasis: string; intro: string; image: string; eyebrow: string; details: string[]; facts: [string, string][]; topicDetails?: string[]; cta?: string; sections?: PageSection[]; downloads?: DocumentDownload[] };

const pages: Record<string, PageInfo> = {
  academics: { label: "Academics", title: "Learning for Understanding, Application and Life", emphasis: "for every future.", eyebrow: "Curriculum", intro: "AMHS follows Uganda's national secondary education curriculum, combining strong academic foundations with practical learning, vocational skills, life skills and hands-on projects.", image: "classroom-teacher", details: ["Our learner-centred approach uses competency-based learning, Project-Based Learning, Work-Based Learning and continuous assessment to help students apply knowledge, solve problems and prepare for real-life opportunities.", "From 2027, AMHS will offer both O-Level and Advanced Level education, with Senior Five welcoming students who meet the entry requirements."], facts: [["O-Level", "Senior One to Four"], ["2027", "Senior Five begins"], ["Skills", "Learning for life"]], cta: "Explore subjects" },
  about: { label: "Who we are", title: "Education with Knowledge, Character and Purpose", emphasis: "for every learner.", eyebrow: "About AMHS", intro: "Asaba Memorial High School (AMHS) is a mixed day and boarding secondary school located in the heart of Kitanyata Village, Kiruli Sub-county, Masindi District, Uganda.", image: "about", details: ["Established in January 2026, the school is duly licensed by the Ministry of Education and Sports of the Republic of Uganda under Licence No. ME/32/6833, issued on 15 September 2026.", "AMHS is committed to providing quality, accessible and holistic secondary education that prepares students to become confident, responsible and innovative changemakers, while bringing secondary education closer to children and families who have previously faced barriers to access."], facts: [["Vision", "Vision Statement"], ["Mission", "Mission Statement"], ["Philosophy", "Our Educational Philosophy"]], topicDetails: ["To be a model school that nurtures responsible, empowered, and values-driven leaders through inclusive, holistic, and transformative education that equips students to become change makers in their communities.", "To provide quality, inclusive, and values-based education that empowers students, especially from vulnerable and underserved communities, to grow in knowledge, character, and purpose. The school is committed to nurturing future leaders through academic excellence, spiritual growth, life skills development, and community responsibility.", "We believe that every young person has the potential to learn, grow and make a positive difference. Education should go beyond academic achievement to develop character, practical skills, creativity, leadership and a sense of responsibility. At AMHS, we create an inclusive and supportive environment where students are encouraged to discover their potential, think critically, solve problems and become confident changemakers who contribute to their communities and shape a brighter tomorrow."] },
  "amhs-roots": { label: "Who we are", title: "A Legacy that Became a School", emphasis: "with purpose.", eyebrow: "AMHS Roots", intro: "Asaba Memorial High School was founded in honour of Abwooli Asaba Mary, a devoted mother who passed away on 21 March 2022.", image: "legacy", details: ["Her life and legacy of compassion, resilience and commitment to uplifting others inspired the establishment of a school through which opportunities could be created for generations of young people. From that legacy emerged a bigger vision: to create a school capable of changing lives through accessible, transformative and values-based education.", "AMHS was established in Kitanyata because education remains one of the strongest pathways through which families and communities can build sustainable futures. The word Memorial represents more than remembrance: it represents continuing a legacy through service by serving underserved communities, expanding access, supporting vulnerable learners, developing responsible young leaders and turning education into practical community transformation."], facts: [["2022", "Foundation legacy"], ["Kitanyata", "School location"], ["Service", "Community mission"]], cta: "Read our story", sections: [
    { title: "From Memory to Opportunity", body: ["The school's roots continue to shape its commitment to:"], items: ["Serving underserved communities", "Expanding access to secondary education", "Supporting vulnerable learners", "Developing responsible young leaders", "Turning education into practical community transformation"] },
    { title: "A continuing story", body: ["Every learner who discovers a talent, completes secondary education, acquires a practical skill, proceeds to further education, establishes an enterprise or returns to serve the community becomes part of that continuing story."] },
  ] },
  team: { label: "Who we are", title: "People Committed to Every Learner", emphasis: "and every future.", eyebrow: "Our Team", intro: "Behind every successful school is a community of people working together. AMHS brings together school leadership, teachers, administrative personnel, support staff, parents, governors and student leaders.", image: "team", details: ["Our teaching staff deliver classroom instruction while also supporting student guidance, supervision and co-curricular activities.", "Our administrative and support teams help manage records, finance, boarding, catering, sanitation, security, maintenance and student welfare."], facts: [["Leadership", "School leadership"], ["Support", "Parent & staff teams"], ["Student", "Voice & leadership"]], cta: "Meet our staff" },
  staff: { label: "Our team", title: "Our Staff", emphasis: "learning and care in action.", eyebrow: "Our Staff", intro: "Our teaching staff deliver classroom instruction while also supporting student guidance, supervision and co-curricular activities.", image: "team", details: ["Our administrative and support teams help manage records, finance, boarding, catering, sanitation, security, maintenance and student welfare.", "Together, they create an environment where learners can develop academically and personally."], facts: [["Teaching", "Classroom excellence"], ["Support", "Welfare & operations"], ["Care", "Student guidance"]], cta: "Contact the school" },
  "board-of-governors": { label: "Our team", title: "Governance for Quality and Accountability", emphasis: "for the school community.", eyebrow: "Board of Governors", intro: "The Board of Governors provides institutional governance and oversight, helping ensure that AMHS operates responsibly and remains focused on its educational mission.", image: "board", details: ["The Board supports strategic direction, accountability, school development, learner welfare, policy oversight and engagement with the wider school community.", "The Board works closely with school leadership to keep students at the centre of every decision."], facts: [["Governance", "Strategic oversight"], ["Welfare", "Learner wellbeing"], ["Accountability", "Responsible leadership"]], cta: "Our governance" },
  "pta-leadership": { label: "Our team", title: "Parents as Partners in Education", emphasis: "in every learner's journey.", eyebrow: "PTA Leadership", intro: "AMHS recognises that educating a child requires cooperation between the school and the home.", image: "parents", details: ["The Parents Teachers Association provides an important link between parents, teachers and school administration.", "It supports dialogue on student welfare, discipline, academic performance and school development while strengthening parental participation in education."], facts: [["Partnership", "Home & school"], ["Welfare", "Student support"], ["Participation", "School development"]], cta: "Join the PTA" },
  "student-leadership": { label: "Our team", title: "Learning to Lead by Leading", emphasis: "with responsibility.", eyebrow: "Student Leadership", intro: "Leadership development should begin while young people are still learning.", image: "prefects", details: ["Student leadership at AMHS provides learners with opportunities to develop responsibility, communication, teamwork, accountability and service.", "Student leaders help promote positive behaviour, represent student concerns and support activities within the school community."], facts: [["Responsibility", "Student voice"], ["Leadership", "Service & teamwork"], ["Growth", "Confidence & accountability"]], cta: "Student life", sections: [
    { title: "Student leadership roles", items: ["Head Prefect", "Deputy Head Prefect", "Dormitory Leaders", "Class Leaders", "Club Leaders", "Other Prefects"] },
  ] },
  "success-stories": { label: "Who we are", title: "Every Journey Matters", emphasis: "and every story counts.", eyebrow: "Success Stories", intro: "Success at AMHS is not measured only by examination results. It can be seen when a learner improves academically, develops confidence, discovers a talent, learns a practical skill or becomes an example to others.", image: "success", details: ["Success can also mean assuming responsibility, taking initiative, contributing to a project, finding a voice through teamwork or learning to serve the community.", "Kanshabe Natasha's story shows how AMHS helps students build confidence, communication, problem-solving and leadership skills so they can become responsible changemakers in their communities."], facts: [["Leadership", "Confidence & responsibility"], ["Teamwork", "Ideas into action"], ["Community", "Service & change"]], cta: "Be a Mentor" },
  "school-policies": { label: "Who we are", title: "Creating a Safe and Responsible Learning Environment", emphasis: "for every learner.", eyebrow: "School Policies", intro: "Our policies establish clear standards for learning, conduct, accountability and student protection.", image: "policies", details: ["At AMHS, every learner has a right to a learning environment free from abuse, neglect, exploitation, violence and discrimination. Safeguarding covers prevention, reporting, safe recruitment, supervision, guidance and counselling.", "The downloadable policy centre can include the Child Protection & Safeguarding Policy, Students’ Code of Conduct, Staff Code of Conduct, Admissions Policy, Boarding Policy, Anti-Bullying Policy, ICT/Internet Policy, Health & Safety Policy, Academic Policy and Complaints Procedure."], facts: [["Safeguarding", "Child protection"], ["Support", "Guidance & counselling"], ["Standards", "Conduct & accountability"]], cta: "Request a policy" },
  partners: { label: "Who we are", title: "Working Together for Education", emphasis: "with real purpose.", eyebrow: "Our Partners", intro: "Meaningful educational transformation requires collaboration.", image: "partners", details: ["AMHS welcomes responsible partnerships with parents, communities, education authorities, development organisations, businesses, institutions, professionals and well-wishers who share our commitment to improving opportunities for young people.", "Partnership opportunities include student sponsorship, learning materials, ICT, vocational equipment, infrastructure, sports, school exchanges, teacher development, career guidance and technical support."], facts: [["Partnership", "Shared mission"], ["Support", "Student opportunities"], ["Growth", "Infrastructure & skills"]], cta: "Partner With AMHS" },
  facilities: { label: "Who we are", title: "A Campus Built for Learning and Growth", emphasis: "with purpose.", eyebrow: "School Facilities", intro: "Our campus is being developed progressively to provide safe, functional spaces for academic learning, boarding, practical education and co-curricular development.", image: "facilities", details: ["Facilities include classrooms and an administration block; boarding facilities; a vocational skills block; a developing library; ICT and computer facilities; kitchen and feeding facilities; water infrastructure with an electric pump and distributed tap points; electricity connected to operational buildings; sanitation facilities; and playground and sports areas.", "The school’s longer-term development programme includes science laboratories, additional classrooms, dormitories, sports facilities and other learning infrastructure to meet the needs of a growing student population."], facts: [["Classrooms", "Teaching spaces"], ["Boarding", "Accommodation"], ["Practical", "Skills & learning"]], cta: "Plan a visit" },
  curriculum: { label: "Academics", title: "Learning for Understanding, Application and Life", emphasis: "at AMHS.", eyebrow: "Curriculum", intro: "AMHS offers a Ministry of Education and Sports-approved curriculum that connects academic learning with practical skills, life skills and hands-on projects.", image: "ict-class", details: ["Uganda's Lower Secondary Curriculum is competency-based. At AMHS, students learn to understand, apply knowledge, solve problems, collaborate and prepare for further education, employment and entrepreneurship.", "Our curriculum is strengthened through learner-centred education, Project-Based Learning, Work-Based Learning, vocational learning, global exchange and opportunities for students to become changemakers in their communities."], facts: [["S1–S4", "O-Level curriculum"], ["2027", "A-Level begins"], ["UNLSC", "Competency-based"]], cta: "View subjects", sections: [
    { title: "Core academic integration", items: ["Competency-based learning that builds knowledge and practical abilities", "Learner-centred education that recognises students' interests and potential", "Practical learning through activities, research, projects and problem-solving", "Project-Based Learning (PBL) for real-world challenges, creativity and collaboration", "Work-Based Learning (WBL) through supervised practical experience", "Global School Exchange (GSE) for learning across cultures and borders"] },
    { title: "Vocational and skills-based learning", body: ["Through Sifa Skilling Hub (SSH), established by Asaba Memorial Education Foundation (AMEF), students can develop practical skills alongside their academic studies."], items: ["Multimedia", "Hairdressing and barbering", "Tailoring and fashion design", "Brass band", "Welding and carpentry", "Cosmetics and soap making", "Branding, garment printing and heat transfer"] },
    { title: "Curriculum outcomes", body: ["AMHS aims to develop confident, responsible and creative learners who think critically, communicate effectively, work collaboratively, adapt to change and contribute positively to society."] },
  ], downloads: [{ label: "Download the Uganda Lower Secondary Curriculum Framework", href: "/documents/uganda-lower-secondary-curriculum-framework.pdf", description: "Official NCDC curriculum framework (PDF)" }] },
  "academic-calendar": { label: "Academics", title: "Plan the school year", emphasis: "with confidence.", eyebrow: "Academic Calendar", intro: "The AMHS calendar will organise opening, visiting days, assessment periods, candidate activities, examinations and closing dates for each term.", image: "calendar", details: ["Term I: Opening, Visiting Day, Assessment Period and Closing. Term II: Opening, Visiting Day, Assessment Period and Closing. Term III: Opening, Candidate Activities, Examinations and Closing.", "Because specific term dates are not contained in the Development Plan, the current approved annual calendar should be populated here when available. Families will receive important reminders through the school office."], facts: [["Term I", "Opening to closing"], ["Term II", "Opening to closing"], ["Term III", "Candidates & exams"]], cta: "Download calendar" },
  subjects: { label: "Academics", title: "Find the subjects", emphasis: "that spark you.", eyebrow: "Subjects Offered", intro: "AMHS offers a broad O-Level subject programme and will begin its Advanced Level programme with Senior Five in 2027.", image: "subjects", details: ["The O-Level programme covers English Language, Mathematics, sciences, humanities, languages, technology, agriculture, entrepreneurship, fine art and physical education, subject to applicable national curriculum requirements and approved school offerings.", "A-Level students choose three principal subjects guided by their strengths, interests and career aspirations, alongside General Paper and the appropriate subsidiary subject under UNEB requirements."], facts: [["14", "O-Level subjects"], ["S.5–S.6", "Advanced Level"], ["3", "Principal subjects"]], cta: "Explore A-Level curriculum", sections: [
    { title: "O-Level subjects (S.1–S.4)", items: ["English Language", "Mathematics", "Physics", "Biology", "Chemistry", "Geography", "History and Political Education", "Religious Education", "Physical Education", "Kiswahili", "Agriculture", "ICT / Computer Studies", "Entrepreneurship", "Fine Art"] },
    { title: "Advanced Level", body: ["Senior Five begins in 2027. Visit the A-Level curriculum page for the current subject-combination guide, UACE preparation information and admissions guidance."] },
  ] },
  "advanced-level-curriculum": { label: "Academics", title: "Advanced Level Curriculum", emphasis: "S.5–S.6.", eyebrow: "A-Level at AMHS", intro: "Beginning in 2027, AMHS will commence Advanced Level education with Senior Five, preparing students for UACE, university admission, professional training and future careers.", image: "curriculum", details: ["The programme is for students who have completed Senior Four and meet the entry requirements for Senior Five. Students select three principal subjects according to their strengths, interests and career aspirations.", "Every combination includes General Paper and the appropriate subsidiary subject—Subsidiary Mathematics or Subsidiary ICT—in accordance with UNEB requirements."], facts: [["2027", "S.5 starts"], ["3", "Principal subjects"], ["UACE", "Exam preparation"]], cta: "Apply for S.5", sections: [
    { title: "Subject-combination guide", body: ["The guide below is subject to confirmation by the Director of Studies. Students and parents should consult the Director of Studies and Headteacher on availability and university-entry requirements."], items: ["GEO, ENT, ART / ICT — Geography, Entrepreneurship, Art", "PCM — Physics, Chemistry, Mathematics", "DIV, ENT, ART / ICT — Divinity, Entrepreneurship, Art", "DIV, ECO, ART / SM — Divinity, Economics, Art", "KISW, ENT, GEO / ICT — Kiswahili, Entrepreneurship, Geography", "KISW, ECO, GEO / SM — Kiswahili, Economics, Geography", "HIS, ECO, DIV / ART — History, Economics, Divinity"] },
    { title: "UACE preparation", body: ["AMHS will provide structured teaching, regular assessment, revision sessions and mock examinations to prepare students for the Uganda Advanced Certificate of Education (UACE). The goal is strong performance and qualification for universities, colleges and other higher-education institutions."] },
    { title: "UACE grading", body: ["UACE uses the Distinction 1 (D1) to Fail 9 (F9) grading scale. A minimum of two principal passes is required for university admission. AMHS plans mock examinations in Term II of Senior Six."] },
  ] },
  library: { label: "Academics", title: "Today’s Readers.", emphasis: "Tomorrow’s Leaders.", eyebrow: "School Library", intro: "AMHS is developing a modern library as a learning hub and community resource centre for reading, research, independent learning and innovation.", image: "library", details: ["The library is being developed as both a physical library with textbooks, reference materials, academic journals, reading corners and research stations, and a virtual library supported by digital learning resources, computers, e-learning platforms and AI-powered research tools.", "The vision extends to the wider community: students from other schools and adults will be able to read, learn new skills and access digital information."], facts: [["Physical", "Books & research"], ["Virtual", "Digital learning"], ["Community", "Open access"]], cta: "Support the library", sections: [
    { title: "Lifelong habits", body: ["AMHS has established a Reading Club and organises Spelling Bees to strengthen reading, spelling, vocabulary, communication and confidence."] },
    { title: "Research and discovery", body: ["Students are encouraged to explore new ideas, research classroom subjects, deepen their understanding and develop independent study habits through books, reference materials and digital resources."] },
    { title: "Help bring books closer", body: ["As the only secondary school in Kiruli Sub-county, AMHS welcomes donations of textbooks, reference books, computers and digital learning resources to help students access knowledge and build brighter futures."] },
  ] },
  syllabus: { label: "Academics", title: "A clear route", emphasis: "to achievement.", eyebrow: "National & School Syllabus", intro: "AMHS aligns academic delivery with the applicable national curriculum and syllabus requirements.", image: "syllabus", details: ["The National Syllabus section can organise approved resources by O-Level, subject and class or level. School academic resources can include schemes of work, revision guides, holiday work, reading lists, assessment guides and project guidelines.", "These resources will provide students, parents and teachers with an organised route to learning, revision, assessment and project work."], facts: [["Aligned", "National syllabus"], ["Mapped", "Progression"], ["Shared", "With families"]], cta: "Get syllabus information" },
  admission: { label: "Admission", title: "Begin Your AMHS", emphasis: "Journey.", eyebrow: "Join AMHS", intro: "Applications for the 2027 academic year are open for Senior One through Senior Five. AMHS welcomes Ugandan and refugee learners into a supportive, student-centred day and boarding environment.", image: "admission", details: ["Students awaiting PLE or UCE results may begin the process while waiting for official results. Final admission and placement depend on the school’s entry requirements and verification of the required academic results.", "Parents and guardians can apply online, download the official form or collect a printed copy from the school office or authorised agents, mainly at local primary-school headteachers’ offices."], facts: [["2027", "Applications open"], ["S.1–S.5", "Entry classes"], ["UGX 20,000", "Application fee"]], cta: "Apply now", sections: [
    { title: "Key admission dates", items: ["Applications open — 18 October 2026", "S.1 preliminary interviews — 30 November 2026", "S.2 and S.3 registration and interviews — 20 November 2026 to 1 February 2027", "S.5 preliminary interviews — 20 December 2026", "Expected PLE and UCE results period — from 10 January 2027, subject to UNEB announcements", "Final admission decisions — after verification of required results", "Planned reporting date — 3 February 2027, subject to confirmation"] },
    { title: "Entry requirements", body: ["Senior One applicants need PLE results, a completed official AMHS admission form and any additional requirements on the form. S.2 and S.3 transfer applicants should provide an academic report from their previous school, the completed form, requested academic documents and attend an interview or assessment where required.", "Senior Five applicants should provide UCE results or accepted proof, a recommendation letter from their previous school, evidence that they meet the requirements for their selected subject combination, and attend an interview with the relevant Head of Department and Headteacher. Minimum grades will be confirmed in the official admission guide."] },
    { title: "Day and boarding options", body: ["Day scholars learn and develop while remaining connected to their families. Boarding students are supported in a safe, peaceful environment with a security guard, solar-powered security lighting, supervised morning and evening prep, electricity and reliable water. Boarders bring mosquito nets, bedding including a mattress and bedsheets, and casual wear; uniforms and scholastic materials are available from the AMHS canteen."] },
    { title: "Admissions support", body: ["The non-refundable application fee is UGX 20,000. For support, call or WhatsApp +256 766 610 442 or email asabamemorialhighschool@gmail.com."] },
  ], downloads: [{ label: "Download the AMHS admission application form", href: "/documents/amhs-admission-application-form.pdf", description: "Official application form (PDF)" }] },
  fees: { label: "Admission", title: "Simple, clear", emphasis: "planning.", eyebrow: "Fees Structure", intro: "For the 2027 academic year, AMHS school fees are set per term for both O-Level and A-Level students, with free vocational and practical-skills training included.", image: "fees", details: ["Day students pay UGX 200,000 per term. Boarding students pay UGX 400,000 per term. Instalment payments are accepted; contact the Bursar’s Office to arrange a payment plan.", "Medical fees are UGX 10,000 and the school uniform is UGX 100,000. Parents and guardians paying by bank deposit, MTN MoMo or Airtel Money must present their payment confirmation receipt for verification and record-keeping."], facts: [["UGX 200,000", "Day per term"], ["UGX 400,000", "Boarding per term"], ["Free", "Vocational training"]], cta: "Ask about fees", sections: [
    { title: "Day student fees", items: ["School fees — UGX 200,000 per term", "Medical fees — UGX 10,000", "School uniform — UGX 100,000", "Free vocational and practical-skills training"] },
    { title: "Boarding student fees", items: ["Boarding fees — UGX 400,000 per term", "Medical fees — UGX 10,000", "School uniform — UGX 100,000", "Free vocational and practical-skills training"] },
    { title: "Qualifications and payment", body: ["After completing S.4 or S.6, students can earn a UNEB academic certificate and a UVTAB vocational certificate, subject to applicable assessment requirements. Confirm the official fee details with the school office before payment and retain your receipt."] },
  ], downloads: [{ label: "Download the 2027 fees structure", href: "/documents/amhs-fees-structure-2027.pdf", description: "Official 2027 fees structure (PDF)" }] },
  uniform: { label: "Admission", title: "Proud to belong.", emphasis: "Ready to learn.", eyebrow: "School Uniform", intro: "The AMHS uniform represents belonging, discipline, equality and pride in our school community.", image: "uniform", details: ["All students are expected to maintain the approved uniform neatly and responsibly. The requirements will cover day uniform, boarding requirements, sportswear, sweater, shoes, socks and school bag requirements.", "The school will provide actual photographs of male and female students wearing the approved uniform, together with a downloadable uniform and personal-requirements checklist."], facts: [["Everyday", "Day uniform"], ["Boarding", "Personal requirements"], ["Active", "Sportswear"]], cta: "Request a uniform list" },
  "our-approach": { label: "Our approach", title: "Education That Goes", emphasis: "Beyond the Classroom.", eyebrow: "How we learn", intro: "AMHS believes young people learn best when academic knowledge is connected to experience.", image: "approach", details: ["Our educational approach therefore brings together academics, practical learning, creativity, leadership, sports, technology, service and talent development.", "Practical learning includes areas such as branding, garment printing and heat transfer technology, ICT, carpentry, tailoring, hairdressing, entrepreneurship and other hands-on skills."], facts: [["PBL", "Hands-on learning"], ["Skills", "Branding & design"], ["Life", "Useful practice"]], cta: "Explore student life" },
  "project-based-learning": { label: "Our approach", title: "Learn. Create. Solve.", emphasis: "Apply with purpose.", eyebrow: "Project-Based Learning", intro: "Project-Based Learning is a central element of the AMHS approach. Students explore real problems, develop ideas, create solutions and present what they have learned.", image: "project-learning", details: ["Projects connect learning with agriculture, ICT, entrepreneurship, branding, garment printing, carpentry, soap making, the environment and community challenges.", "A project might connect Mathematics with budgeting, ICT with digital design, Entrepreneurship with developing and costing a simple product, or practical skills with producing branded garments through heat-transfer technology."], facts: [["PBL", "Learning by doing"], ["9", "Practical themes"], ["Real-world", "Meaningful projects"]], cta: "Explore our approach" },
  "brass-band-club": { label: "Our approach", title: "Music. Discipline.", emphasis: "Teamwork. Confidence.", eyebrow: "Brass Band Club", intro: "The AMHS Brass Band Club provides students with an opportunity to discover and develop musical talent while learning teamwork, discipline, concentration and performance skills.", image: "brass-band", details: ["Students progressively learn musical instruments, music reading, marching, ensemble performance and public presentation.", "The Club looks forward to participating in school ceremonies, community events, national celebrations, competitions, exchange programmes and special performances."], facts: [["BBC", "Brass Band Club"], ["Music", "Shared expression"], ["Teamwork", "Playing as one"]], cta: "Discover student life" },
  "arts-and-culture": { label: "Our approach", title: "Arts & Culture", emphasis: "Creating positive change.", eyebrow: "Music, Dance and Drama", intro: "At AMHS, Arts & Culture is an opportunity for students to discover talent, express creativity, celebrate cultural heritage and use their voices to inspire others.", image: "brass-band", details: ["Through music, dance, drama, poetry, storytelling, acting, singing and brass band performances, students build confidence, communication, teamwork and leadership skills.", "With guidance from trainers, students create original songs and drama around issues affecting their communities, including HIV/AIDS prevention, girls’ education, gender-based violence, child rights and marriage."], facts: [["4", "Songs recorded"], ["100,000+", "Listeners reached"], ["2,000+", "People engaged"]], cta: "Support creative learning", sections: [
    { title: "Student achievement and community impact", body: ["The AMHS school choir has recorded four original educational songs in a professional music studio. An HIV/AIDS prevention song has reached more than 100,000 listeners. Students' music is broadcast on Radio King FM in Masindi and shared through social media, reaching communities in Masindi, Hoima, Kikuube, Buliisa, Kiryandongo and Kibaale districts."] },
    { title: "Student-led clubs and leadership", body: ["The Brass Band Club, Drama Club, school choir and other creative clubs are student-led spaces where learners make decisions, organise activities, take responsibility and lead peers. In six months, the Brass Band Club and Drama Club reached more than 2,000 people through performances and community engagement."] },
    { title: "Arts for social change", body: ["Music, dance and drama help students raise awareness and encourage positive action. Original songs, performances and educational drama make messages on health, education, protection and community challenges accessible and memorable."] },
    { title: "Culture, heritage and identity", body: ["Music, Dance and Drama (MDD) gives students opportunities to celebrate and preserve cultural heritage through traditional music, dance, storytelling, poetry and performance, while respecting the cultures and identities of others."] },
    { title: "Talent, technology and enterprise", body: ["Students develop singing, songwriting, dancing, acting, poetry, storytelling, instrumental performance and public-speaking skills. AMHS aims to establish a school-based music and video production studio so students can also learn recording, video production, digital content creation and creative entrepreneurship."] },
    { title: "Eric’s success story", body: ["“Being part of the Music, Dance and Drama programme at AMHS has helped me grow in confidence, develop my leadership skills and discover how my talents can inspire others.” Eric, a Senior Two student, used payment from a community Brass Band performance to buy exercise books and a school uniform. He says the experience showed him that talent can educate, inspire and create opportunities to support education."] },
    { title: "Support students’ creative potential", body: ["AMHS welcomes support in the form of musical instruments, sound equipment, recording tools, video cameras, computers, production software and technical training. These resources will help students strengthen creative and digital skills, produce educational content and reach wider audiences."] },
  ] },
  "games-and-sport": { label: "Our approach", title: "Strong Bodies. Strong Minds.", emphasis: "Strong Teams.", eyebrow: "Games & Sports", intro: "Sports form an important part of holistic education at AMHS.", image: "sports", details: ["Through games and physical activities, learners develop fitness, discipline, resilience, teamwork, leadership and healthy competition.", "The school’s developing playground is intended to support sports and co-curricular activities. Competition matters, but character matters more: respect, resilience and a generous team spirit guide every game."], facts: [["Active", "Fitness & wellbeing"], ["Growth", "Discipline & resilience"], ["Teamwork", "On and off the field"]], cta: "Explore student life" },
  "talent-development": { label: "Our approach", title: "Every learner has", emphasis: "potential.", eyebrow: "Talent Development", intro: "Not every child’s greatest ability appears on an examination paper. AMHS seeks to identify and develop talent in music, sports, art, public speaking, leadership, technology, entrepreneurship, craftsmanship and creative performance.", image: "talent", details: ["Talent development follows three stages: Discover, Develop and Demonstrate. Students discover abilities, receive guidance and practise, then demonstrate those abilities through exhibitions, performances, competitions, projects and community activities.", "Supportive mentors help each learner set ambitious goals and celebrate the progress that comes from steady effort."], facts: [["Discover", "Find a strength"], ["Develop", "Practise with guidance"], ["Demonstrate", "Share and contribute"]], cta: "Discover student life" },
  "associations-and-clubs": { label: "Our approach", title: "Find your people.", emphasis: "Make your mark.", eyebrow: "Associations & Clubs", intro: "Clubs create spaces where learners can explore interests, practise leadership and develop friendships beyond normal classroom lessons.", image: "journalism", details: ["The programme can include Debate & Public Speaking, ICT & Innovation, Scripture or Christian Fellowship, Music & Performing Arts, and Writers & Readers.", "Students can join established clubs or help shape new ones around the ideas and causes that matter to them. These communities build confidence, responsibility and the joy of doing something worthwhile together."], facts: [["Explore", "Interests & ideas"], ["Lead", "Student responsibility"], ["Belong", "Friendship & community"]], cta: "Explore student life" },
  "students-life": { label: "Student life", title: "More Than", emphasis: "a School Day.", eyebrow: "Life at AMHS", intro: "Life at AMHS is designed around learning, friendship, responsibility, creativity and personal growth.", image: "students-life", details: ["Students experience a structured environment that combines classroom learning with practical education, sports, clubs, leadership, guidance and social development.", "AMHS recognises that adolescence is an important stage of personal development. Guidance and counselling therefore form part of the school's support system."], facts: [["Together", "Learning & friendship"], ["Guidance", "Welfare & mentoring"], ["Belong", "Clubs, sports & leadership"]], cta: "See our approach", sections: [
    { title: "Learning Together", body: ["Classrooms are spaces for discussion, inquiry, collaboration and academic development."] },
    { title: "Living Together", body: ["For boarding learners, school life also teaches independence, responsibility, cooperation and respect for others."] },
    { title: "Growing Together", body: ["Through clubs, projects, sports, music and leadership opportunities, students discover abilities that may not always emerge during classroom lessons."] },
    { title: "Student Welfare & Safeguarding", body: ["Student safety remains central to school life.", "AMHS's safeguarding approach covers prevention, reporting, professional boundaries, supervision, safe recruitment, counselling and appropriate referral where necessary."] },
    { title: "A Typical AMHS Experience", body: ["A learner's school experience may move through:"], items: ["Morning preparation", "Classes", "Break", "Academic lessons", "Lunch", "Practical/project learning", "Sports/clubs", "Evening preparation for boarders"] },
  ] },
  "get-involved": { label: "Get involved", title: "Help Us Light", emphasis: "Another Path.", eyebrow: "Support AMHS", intro: "A child’s future should not be determined solely by where that child was born or the financial circumstances of the family.", image: "involved", details: ["Support can strengthen books and learning materials, ICT equipment, science facilities, library development, vocational equipment, sports equipment, boarding facilities, classroom development, water and sanitation, and student support.", "Through donations, sponsorships and partnerships, individuals and organisations can help expand educational opportunities. The school’s official Equity Bank Uganda account is provided below for approved payments and support."], facts: [["Give", "Create opportunity"], ["Sponsor", "Support a learner"], ["Partner", "Strengthen AMHS"]], cta: "Make a difference" },
  "news-and-events": { label: "News and Events", title: "A school community in motion", emphasis: "with learning, celebration and service.", eyebrow: "News and Events", intro: "AMHS is building a campus culture that celebrates learning, milestones, school life and community engagement.", image: "curriculum", details: ["News and events at AMHS will highlight student achievement, school activities, outreach, open days, community partnerships and meaningful moments across the academic year.", "We welcome families, partners and friends to follow the life of the school and celebrate the progress of our learners."], facts: [["School life", "Student achievement"], ["Community", "Events & outreach"], ["Growth", "Shared milestones"]], cta: "Stay connected" },
  "contact-us": { label: "Contact Us", title: "We are here to help", emphasis: "and to welcome you.", eyebrow: "Contact AMHS", intro: "We are happy to help with admissions enquiries, general school questions, partnerships and support opportunities.", image: "involved", details: ["Whether you want to find out more about the school, request a visit, discuss sponsorship or ask about admissions, the AMHS team is ready to assist.", "Please use the details below to get in touch and we will help you with the next step."], facts: [["Admissions", "School enquiries"], ["Partnerships", "School exchanges"], ["Support", "Sponsorship & giving"]], cta: "Get in touch" },
  "school-exchange-programmes": { label: "School Exchange Programme", title: "Connecting Schools.", emphasis: "Inspiring Students.", eyebrow: "Global School Exchange (GSE)", intro: "Bringing students and teachers together across countries to learn, share, connect and grow.", image: "exchange", details: ["The Global School Exchange (GSE) is an initiative of Asaba Memorial High School (AMHS), Uganda, created to connect our students and teachers with schools and educators around the world.", "We believe education becomes richer when students learn not only from books and classrooms, but also from people, cultures and experiences beyond their own communities."], facts: [["Connect", "Students and educators"], ["Learn", "Across borders"], ["Grow", "Lasting partnerships"]], cta: "Become a Partner School" },
};

type PageFamily = "story" | "people" | "learning" | "practical" | "experience" | "community";

const pageHeadings: Record<string, [string, string]> = {
  academics: ["Ambition with", "the right support."], about: ["A shared vision for", "every learner."], "amhs-roots": ["A story worth", "carrying forward."],
  team: ["Teaching, mentoring,", "and belonging."], staff: ["Dedicated to each", "student’s growth."], "board-of-governors": ["Leadership with students", "at the centre."],
  "pta-leadership": ["Home and school", "working together."], "student-leadership": ["A voice, a responsibility,", "a chance to lead."], "success-stories": ["What our community", "carries forward."],
  "school-policies": ["The guidance that keeps", "our community safe."], partners: ["Partnerships with", "real purpose."], facilities: ["A campus ready for", "every kind of learning."],
  curriculum: ["A clear journey through", "knowledge and possibility."], "academic-calendar": ["Plan the year", "with confidence."], subjects: ["Areas of study that", "open up choices."], "advanced-level-curriculum": ["Senior Five starts", "a new academic journey."],
  library: ["Time and space", "to think deeply."], syllabus: ["What students learn,", "and how it builds."], admission: ["Everything families need", "to begin well."],
  fees: ["Straightforward support", "for family planning."], uniform: ["What students need", "to feel ready."], "our-approach": ["How learning becomes", "part of who students are."],
  "project-based-learning": ["Questions, action,", "and meaningful work."], "brass-band-club": ["Practice, performance,", "and pride."], "arts-and-culture": ["Creative voices", "making a difference."], "games-and-sport": ["A place to play,", "compete, and grow."],
  "talent-development": ["A pathway for", "every strength."], "associations-and-clubs": ["Interests become", "a sense of belonging."], "students-life": ["A school day with", "more to discover."],
  "get-involved": ["Ways to make", "a lasting difference."], "news-and-events": ["What is happening", "across the school."], "contact-us": ["A warm welcome", "from the AMHS team."], "school-exchange-programmes": ["New perspectives", "that travel both ways."],
};

const actionDestinations: Record<string, string> = {
  academics: "/subjects", about: "/team", "amhs-roots": "/about", team: "/staff", staff: "mailto:asabamemorialhighschool@gmail.com",
  "board-of-governors": "mailto:asabamemorialhighschool@gmail.com", "pta-leadership": "mailto:asabamemorialhighschool@gmail.com", "student-leadership": "/students-life",
  "success-stories": "mailto:asabamemorialhighschool@gmail.com?subject=Mentorship%20enquiry", "school-policies": "mailto:asabamemorialhighschool@gmail.com", partners: "mailto:asabamemorialhighschool@gmail.com", facilities: "/apply-now",
  curriculum: "/subjects", "academic-calendar": "mailto:asabamemorialhighschool@gmail.com", subjects: "/advanced-level-curriculum", "advanced-level-curriculum": "/apply-now", library: "mailto:asabamemorialhighschool@gmail.com?subject=Library%20support",
  syllabus: "mailto:asabamemorialhighschool@gmail.com", admission: "/apply-now", fees: "mailto:asabamemorialhighschool@gmail.com", uniform: "mailto:asabamemorialhighschool@gmail.com",
  "our-approach": "/students-life", "project-based-learning": "/our-approach", "brass-band-club": "/students-life", "arts-and-culture": "mailto:asabamemorialhighschool@gmail.com?subject=Creative%20learning%20support", "games-and-sport": "/students-life",
  "talent-development": "/students-life", "associations-and-clubs": "/students-life", "students-life": "/our-approach", "get-involved": "/donate",
  "news-and-events": "/news-and-events", "contact-us": "mailto:asabamemorialhighschool@gmail.com",
  "school-exchange-programmes": "#exchange-form",
};

const familyContent: Record<PageFamily, { label: string; title: string; emphasis: string; description: string }> = {
  story: { label: "The bigger picture", title: "A shared", emphasis: "sense of purpose.", description: "The details below show the people, values and experiences that shape this part of AMHS." },
  people: { label: "People first", title: "The relationships", emphasis: "behind the work.", description: "Every role contributes to a school where young people are known, challenged and supported." },
  learning: { label: "Learning in practice", title: "Strong foundations.", emphasis: "Wider horizons.", description: "This is how students build knowledge, confidence and the habits that carry learning forward." },
  practical: { label: "Useful information", title: "The details", emphasis: "families need.", description: "Clear information helps students and families plan confidently for the next step." },
  experience: { label: "Beyond the classroom", title: "A chance to", emphasis: "take part and grow.", description: "These experiences give students room to practise, contribute and find what matters to them." },
  community: { label: "Together with AMHS", title: "Shared effort.", emphasis: "Real opportunity.", description: "This work connects the school with families, partners and a wider community of support." },
};

const mediaClass = (key: string) => `page-photo image-${key}`;

const practicalGallery = [
  {
    title: "Branding, garment printing and heat transfer",
    image: "/activities/practical/garment-printing-heat-transfer.jpg",
    alt: "AMHS student using a heat press machine for garment branding and printing",
  },
  {
    title: "Carpentry workshop practice",
    image: "/activities/practical/carpentry-training.jpg",
    alt: "AMHS students learning carpentry skills in a workshop",
  },
  {
    title: "Library study and academic focus",
    image: "/activities/learning/library-study-group.jpg",
    alt: "AMHS students studying together in the library",
  },
  {
    title: "Hairdressing and beauty practice",
    image: "/activities/practical/hairdressing-practice.jpg",
    alt: "AMHS students practising hairdressing and beauty skills",
  },
];

const exchangeObjectives = [
  "Connect with students and educators from other countries.",
  "Exchange ideas, knowledge and experiences.",
  "Explore different cultures and educational systems.",
  "Share learning resources and teaching approaches.",
  "Develop global awareness and cultural understanding.",
  "Build meaningful and lasting international relationships.",
];

const exchangeSteps = [
  ["S", "Start", "Begin with a simple introduction between two schools, teachers or classrooms."],
  ["T", "Talk", "Talk to Students and teachers begin communicating, asking questions and getting to know one another."],
  ["D", "Discover", "Discover each other's schools, communities, cultures, experiences, interests and aspirations."],
  ["C", "Connect", "Build friendships, trust and meaningful relationships across borders."],
  ["C", "Collaborate", "Work together on learning activities and Project-Based Learning (PBL) projects that connect classroom learning with real-world challenges."],
  ["E", "Exchange", "Exchange letters, ideas, knowledge, culture, music, art and experiences."],
  ["V", "Visit", "Where possible, students and teachers can meet through school visits and exchange trips, creating deeper personal and cultural connections."],
  ["G", "Grow", "Develop the relationship into a long-term school partnership, creating continuing opportunities for students, teachers and communities."],
];

const partnerSchoolDetails = [
  "School name and country",
  "Age group of participating students",
  "Number of students",
  "Areas of interest",
  "Preferred exchange format",
  "Preferred dates or period",
  "Any project ideas you would like to explore",
];

function getPageFamily(slug: string): PageFamily {
  if (["academics", "curriculum", "library"].includes(slug)) return "learning";
  if (["academic-calendar", "subjects", "advanced-level-curriculum", "syllabus", "fees", "uniform", "school-policies", "facilities", "admission"].includes(slug)) return "practical";
  if (["team", "staff", "board-of-governors", "pta-leadership", "student-leadership"].includes(slug)) return "people";
  if (["our-approach", "project-based-learning", "brass-band-club", "arts-and-culture", "games-and-sport", "talent-development", "associations-and-clubs", "students-life"].includes(slug)) return "experience";
  if (["partners", "get-involved", "news-and-events", "contact-us", "school-exchange-programmes"].includes(slug)) return "community";
  return "story";
}

function PageAction({ slug, label }: { slug: string; label: string }) {
  const href = actionDestinations[slug] ?? "/apply-now";
  const content = <>{label} <Arrow /></>;
  return href.startsWith("mailto:")
    ? <a className="button button-navy" href={href}>{content}</a>
    : <Link className="button button-navy" href={href}>{content}</Link>;
}

function DocumentDownloads({ documents }: { documents: DocumentDownload[] }) {
  return <div className="document-links" aria-label="Downloads">
    {documents.map((document) => <a className="document-link" href={document.href} download key={document.href}>
      <span>{document.label}</span>
      <small>{document.description}</small>
    </a>)}
  </div>;
}

function TopicOverview({ page, family }: { page: PageInfo; family: PageFamily }) {
  const content = familyContent[family];
  return <section className={`topic-section topic-section--${family}`}>
    <div className="container">
      <div className="topic-heading">
        <div><p className="eyebrow"><span /> {content.label}</p><h2>{content.title}<br /><em>{content.emphasis}</em></h2></div>
        <p>{content.description}</p>
      </div>
      <div className="topic-grid">
        {page.facts.map(([value, label], index) => <article className="topic-card" key={`${value}-${label}`}>
          <span className="topic-number">0{index + 1}</span><strong>{value}</strong><h3>{label}</h3>
          <p>{page.topicDetails?.[index] ?? page.details[index] ?? `Find out more about ${label.toLowerCase()} and what it means for the AMHS community.`}</p>
        </article>)}
      </div>
    </div>
  </section>;
}

function PageSections({ sections }: { sections: PageSection[] }) {
  return <section className="page-sections container">
    <div className="page-sections-grid">
      {sections.map((section) => <article className="page-section-card" key={section.title}>
        <h3>{section.title}</h3>
        {section.body?.map((text) => <p key={text}>{text}</p>)}
        {section.items ? <ul className="check-list">{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
      </article>)}
    </div>
  </section>;
}

function LegacyFeature() {
  return <section className="legacy-feature-section">
    <div className="container legacy-feature-grid">
      <figure className="legacy-feature-photo">
        <img src="/people/legacy/abwooli-asaba-mary.jpg" alt="The late Abwooli Asaba Mary, in whose legacy memory Asaba Memorial High School was established" loading="lazy" width={1800} height={1200} />
        <figcaption>The late Abwooli Asaba Mary</figcaption>
      </figure>
      <div className="legacy-feature-copy">
        <p className="eyebrow"><span /> Legacy and memory</p>
        <h2>A life remembered<br /><em>through opportunity.</em></h2>
        <p>Asaba Memorial High School carries forward the memory of Abwooli Asaba Mary by turning remembrance into service: widening access to education, supporting young people and strengthening the community around them.</p>
      </div>
    </div>
  </section>;
}

function SuccessStoryFeature() {
  return <section className="success-story-section" aria-labelledby="natasha-success-story-title">
    <div className="container success-story-grid">
      <figure className="success-story-photo">
        <img src="/activities/leadership/top-prefects.jpg" alt="AMHS student leaders standing together in school uniform" loading="lazy" width={1800} height={1200} />
        <figcaption>Leadership, teamwork and responsibility in practice.</figcaption>
      </figure>
      <article className="success-story-copy">
        <p className="eyebrow"><span /> Student success story</p>
        <h2 id="natasha-success-story-title">Preparing Young Leaders<br /><em>and Community Changemakers.</em></h2>
        <p><strong>Kanshabe Natasha</strong>, an S3 student at <strong>Asaba Memorial High School (AMHS)</strong>, is growing into a confident young leader through the school's focus on leadership, teamwork, responsibility and community engagement.</p>
        <p>At AMHS, students are encouraged to share ideas, take initiative, work together and understand how they can contribute to solving challenges in their communities. Through these opportunities, Natasha is developing confidence, communication, problem-solving and leadership skills.</p>
        <blockquote>
          <p>"AMHS is helping me become more confident and responsible. I am learning that I can use my ideas and skills to make a positive difference in my community."</p>
          <cite>Kanshabe Natasha, S3 student</cite>
        </blockquote>
        <p>Natasha's story reflects AMHS's commitment to preparing students not only for academic success, but also to become responsible leaders and changemakers in their communities.</p>
      </article>
    </div>
    <div className="container mentor-callout">
      <div>
        <p className="eyebrow eyebrow-light"><span /> Be a Mentor</p>
        <h3>Future leaders need mentors.</h3>
        <p>Be the person who inspires, guides and empowers them. Be a mentor now.</p>
      </div>
      <a className="button button-gold" href="mailto:asabamemorialhighschool@gmail.com?subject=Mentorship%20enquiry">Be a mentor now <Arrow /></a>
    </div>
  </section>;
}

function ProfileDirectory({ type }: { type: "team" | "staff" }) {
  const isLeadership = type === "team";
  const profiles = peopleProfiles[type];
  return <section className="profiles-section">
    <div className="container">
      <div className="profiles-heading">
        <div><p className="eyebrow"><span /> {isLeadership ? "Meet the leadership team" : "Meet our staff"}</p><h2>{isLeadership ? "Guided by care." : "Expertise in every"}<br /><em>{isLeadership ? "Focused on every learner." : "part of school life."}</em></h2></div>
        <p>{isLeadership ? "Our leadership team creates the conditions for excellent learning, strong relationships and a school community that stays true to its values." : "Our teaching and support teams bring specialist knowledge, personal care and a shared commitment to helping young people flourish."}</p>
      </div>
      <div className="profile-grid">
        {profiles.map((profile) => <article className="profile-card" key={profile.name}>
          <div className={`profile-avatar${profile.image ? " has-photo" : ""}`} aria-hidden="true" style={profile.image ? { backgroundImage: `url(${profile.image})` } : undefined}>{profile.image ? "" : profile.initials}</div>
          <p>{profile.role}</p><h3>{profile.name}</h3><span className="profile-rule" />
          <p className="profile-bio">{profile.bio}</p>
        </article>)}
      </div>
      <p className="profiles-contact">For a school enquiry or to reach the right member of the team, <a href="mailto:asabamemorialhighschool@gmail.com">contact the school office</a>.</p>
    </div>
  </section>;
}

function GovernanceDirectory({ type }: { type: "board" | "pta" }) {
  const isPta = type === "pta";
  const profiles = governanceProfiles[type];
  return <section className="profiles-section">
    <div className="container">
      <div className="profiles-heading">
        <div><p className="eyebrow"><span /> {isPta ? "Meet the PTA leadership" : "Meet the governors"}</p><h2>{isPta ? "Parents and teachers." : "Responsible oversight."}<br /><em>{isPta ? "Working as one." : "Students at the centre."}</em></h2></div>
        <p>{isPta ? "Our PTA leaders keep families, teachers and school leadership connected around learner welfare, progress and the continued development of AMHS." : "Our governors support sound leadership, accountability and long-term stewardship for the school community."}</p>
      </div>
      <div className={`profile-grid${isPta ? " profile-grid--governance" : ""}`}>
        {profiles.map((profile) => <article className="profile-card" key={profile.name}>
          <div className={`profile-avatar${profile.image ? " has-photo" : ""}`} aria-hidden="true" style={profile.image ? { backgroundImage: `url(${profile.image})` } : undefined}>{profile.image ? "" : profile.initials}</div>
          <p>{profile.role}</p><h3>{profile.name}</h3><span className="profile-rule" />
          <p className="profile-bio">{profile.bio}</p>
        </article>)}
      </div>
      <p className="profiles-contact">To contact the PTA or Board of Governors, <a href="mailto:asabamemorialhighschool@gmail.com">write to the school office</a>.</p>
    </div>
  </section>;
}

function StudentLeaders() {
  return <section className="profiles-section">
    <div className="container">
      <div className="profiles-heading">
        <div><p className="eyebrow"><span /> Meet our student leaders</p><h2>Trusted by their peers.<br /><em>Growing as leaders.</em></h2></div>
        <p>Our prefects and student leaders represent their fellow learners, support school routines and set an example of responsibility, service and respect.</p>
      </div>
      <div className="leader-grid">
        {studentLeaders.map((leader) => <figure className="leader-card" key={leader.image}>
          <img src={leader.image} alt={leader.name ? `${leader.name}, ${leader.role ?? "student leader"} at AMHS` : "AMHS student leader"} loading="lazy" width={600} height={750} />
          <figcaption>{leader.name ? <strong>{leader.name}</strong> : null}<span>{leader.role ?? "Student leader"}</span></figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}

function BrassBandGallery() {
  return <section className="activity-gallery" aria-labelledby="brass-band-gallery-title">
    <div className="container">
      <div className="activity-gallery-heading">
        <div><p className="eyebrow"><span /> Brass Band Club</p><h2 id="brass-band-gallery-title">Music in motion.<br /><em>Confidence on display.</em></h2></div>
        <p>Through rehearsal and performance, students build musical skill, focus and the confidence to contribute as part of an ensemble.</p>
      </div>
      <div className="activity-gallery-grid">
        <figure className="activity-gallery-card"><img src="/activities/brass-band/brass-band-ensemble.jpg" alt="AMHS Brass Band Club members performing with drums and brass instruments" loading="lazy" width={1406} height={1599} /><figcaption>Playing together as one team.</figcaption></figure>
        <figure className="activity-gallery-card"><img src="/activities/brass-band/brass-band-trombone.jpg" alt="AMHS Brass Band Club student playing a trombone" loading="lazy" width={1200} height={1600} /><figcaption>Developing skill, discipline and pride.</figcaption></figure>
      </div>
    </div>
  </section>;
}

function PracticalLearningGallery() {
  return <section className="activity-gallery practical-learning-gallery" aria-labelledby="practical-learning-gallery-title">
    <div className="container">
      <div className="activity-gallery-heading">
        <div><p className="eyebrow"><span /> Practical skills</p><h2 id="practical-learning-gallery-title">Vocational learning<br /><em>in action.</em></h2></div>
        <p>Students build confidence through visible, hands-on practice, from heat-transfer garment branding to carpentry, study habits and beauty skills.</p>
      </div>
      <div className="practical-learning-gallery-grid">
        {practicalGallery.map((item) => <figure className="activity-gallery-card practical-learning-card" key={item.title}>
          <img src={item.image} alt={item.alt} loading="lazy" width={1280} height={720} />
          <figcaption>{item.title}</figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}

export function generateStaticParams() {
  return [...Object.keys(pages), "apply-now", "donate", "sponsor-a-child"].map((slug) => ({ slug }));
}

function SchoolExchangeProgramme() {
  return <>
    <section className="page-hero"><div className="page-photo image-exchange" /><div className="page-hero-overlay" /><div className="container page-hero-content"><p className="eyebrow eyebrow-light"><span /> School Exchange Programme</p><h1>Connecting Schools.<br /><em>Inspiring Students.</em></h1><p>Learning Across Borders. Bringing students and teachers together across countries to learn, share, connect and grow.</p></div></section>

    <section className="exchange-intro-section"><div className="container exchange-intro-grid"><div><p className="eyebrow"><span /> Global School Exchange (GSE)</p><h2>Connecting Schools. Inspiring Students.<br /><em>Learning Across Borders.</em></h2></div><div className="exchange-copy"><p>The Global School Exchange (GSE) is an initiative of Asaba Memorial High School (AMHS), Uganda, created to connect our students and teachers with schools and educators around the world.</p><p>We believe education becomes richer when students learn not only from books and classrooms, but also from people, cultures and experiences beyond their own communities.</p></div></div></section>

    <section className="exchange-objectives-section"><div className="container"><div className="exchange-section-heading"><div><p className="eyebrow"><span /> The GSE opportunity</p><h2>Through GSE, AMHS aims<br /><em>to create opportunities.</em></h2></div><p>GSE gives AMHS students the opportunity to look beyond their local community, discover the wider world and learn with others across borders.</p></div><ul className="exchange-objectives">{exchangeObjectives.map((objective) => <li key={objective}>{objective}</li>)}</ul><div className="exchange-taglines"><strong>Connecting Students. Inspiring Changemakers. Transforming Communities.</strong><span>Connect. Learn. Share. Grow.</span></div><a className="button button-navy exchange-objective-cta" href="mailto:asabamemorialhighschool@gmail.com?subject=Global%20School%20Exchange%20Partnership">Become a Partner School <Arrow /></a></div></section>

    <section className="exchange-amhs-section"><div className="container exchange-amhs-grid"><div><p className="eyebrow"><span /> Meet Asaba Memorial High School</p><h2>A School Built to Bring<br /><em>Opportunity Closer.</em></h2></div><div className="exchange-copy"><p>Asaba Memorial High School (AMHS) was established by AMEF in Kiruli Sub-County, Masindi District, Uganda, to bring secondary education closer to children and families who previously faced barriers to access.</p><p>Asaba Memorial High School (AMHS) is a member of the Global School Alliance and is partnering with the International Book Project, creating opportunities for AMHS students to connect with students in other countries.</p><p>Become our partner and experience learning beyond the classroom and beyond the blackboard.</p></div></div></section>

    <section className="exchange-pbl-section"><div className="container exchange-pbl-grid"><div className="exchange-pbl-title"><p className="eyebrow eyebrow-light"><span /> Learning by Doing</p><h2>Project-Based Learning<br /><em>Across Borders.</em></h2></div><div className="exchange-copy"><p>At Asaba Memorial High School (AMHS), we believe that students are not only learners—they are change makers. Project-Based Learning (PBL) connects classroom learning with real-life challenges.</p><p>Students are encouraged to identify a problem in their school or community, investigate its causes, develop ideas, create practical solutions and share what they learn.</p><p>Through the Global School Exchange, students can work with international peers to challenges, exchange ideas and develop solutions together.</p><strong>Identify. Investigate. Create. Collaborate. Transform.</strong></div></div></section>

    <section className="exchange-pathway-section"><div className="container"><div className="exchange-section-heading"><div><p className="eyebrow"><span /> The AMHS STDCCEVG Approach</p><h2>From a Simple Connection<br /><em>to Lasting Impact.</em></h2></div><p>At AMHS, we believe meaningful international school partnerships can begin with something simple—a conversation between students and teachers or between schools—and grow into long-term relationships that create opportunities for learning, collaboration and positive change.</p></div><p className="exchange-pathway-intro">Our AMHS STDCCEVG Approach provides a simple pathway for schools and students to connect, learn from one another, collaborate and create meaningful impact.</p><div className="exchange-steps">{exchangeSteps.map(([letter, title, copy], index) => <article className="exchange-step" key={title}><span>0{index + 1}</span><strong>{letter}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="exchange-path">Start → Talk → Discover → Connect → Collaborate → Exchange → Visit → Grow → Impact</p></div></section>

    <section className="exchange-partner-section"><div className="container exchange-partner-grid"><div><p className="eyebrow"><span /> Become an AMHS Partner School</p><h2>Connect Your school with<br /><em>our school in Uganda.</em></h2><p className="exchange-lead">Your students do not need to travel across the world to begin learning across borders.</p><p className="exchange-steps-copy">Start with a conversation.<br />Build a connection.<br />Develop a project.<br />Create a lasting partnership.</p><p className="exchange-lead">Whether your school is interested in virtual exchange, student-to-student connections, Project-Based Learning, cultural exchange, teacher collaboration or a future visitor to Uganda, AMHS would be delighted to explore the possibilities with you.</p></div><aside className="exchange-contact-card"><p className="label">Tell Us About Your School</p><p>Please share:</p><ul className="check-list">{partnerSchoolDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul><p className="label exchange-contact-label">Contact AMHS</p><a href="mailto:asabamemorialhighschool@gmail.com">asabamemorialhighschool@gmail.com</a><a className="button button-navy" href="mailto:asabamemorialhighschool@gmail.com?subject=Global%20School%20Exchange%20Partnership">Become a Partner School <Arrow /></a></aside></div></section>

    <section className="exchange-final-callout"><div className="container"><p>One classroom in Uganda. One classroom somewhere in the world. One shared opportunity to learn, create and grow together.</p></div></section>
  </>;
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "apply-now") return <ApplyPage />;
  if (slug === "donate" || slug === "sponsor-a-child") return <GivingPage sponsor={slug === "sponsor-a-child"} />;
  const page = pages[slug];
  if (!page) notFound();
  if (slug === "school-exchange-programmes") return <SchoolExchangeProgramme />;
  const [sectionTitle, sectionEmphasis] = pageHeadings[slug] ?? [page.eyebrow, "at AMHS."];
  const family = getPageFamily(slug);

  return <>
    <section className={`page-hero${slug === "about" ? " page-hero--text-only" : ""}`}>{slug === "about" ? null : <div className={mediaClass(page.image)} />}<div className="page-hero-overlay" /><div className="container page-hero-content"><p className="eyebrow eyebrow-light"><span /> {page.label}</p><h1>{page.title}<br /><em>{page.emphasis}</em></h1><p>{page.intro}</p></div></section>
    <section className={`content-section content-section--${family} container`}><div className="content-copy"><p className="eyebrow"><span /> {page.eyebrow}</p><h2>{sectionTitle}<br /><em>{sectionEmphasis}</em></h2>{page.details.map((detail) => <p key={detail}>{detail}</p>)}{page.cta ? <PageAction slug={slug} label={page.cta} /> : null}{page.downloads ? <DocumentDownloads documents={page.downloads} /> : null}</div><aside className="facts-card"><p>At a glance</p>{page.facts.map(([value, label]) => <div key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></div>)}</aside></section>
    {slug === "amhs-roots" ? <LegacyFeature /> : null}
    {slug === "success-stories" ? <SuccessStoryFeature /> : null}
    {page.sections ? <PageSections sections={page.sections} /> : null}
    {slug === "student-leadership" ? <StudentLeaders /> : null}
    {slug === "fees" ? <SchoolFeesPaymentSection /> : null}
    {slug === "get-involved" ? <BankAccountSection /> : null}
    {slug === "our-approach" || slug === "project-based-learning" ? <PracticalLearningGallery /> : null}
    {slug === "brass-band-club" ? <BrassBandGallery /> : null}
    {slug === "team" || slug === "staff" ? <ProfileDirectory type={slug} /> : slug === "pta-leadership" ? <GovernanceDirectory type="pta" /> : slug === "board-of-governors" ? <GovernanceDirectory type="board" /> : <TopicOverview page={page} family={family} />}
    {slug === "school-exchange-programmes" ? <section className="application-section container" id="exchange-form"><ExchangeForm /></section> : null}
  </>;
}

function ApplyPage() { return <><section className="page-hero page-hero-short"><div className="page-photo image-admission" /><div className="page-hero-overlay" /><div className="container page-hero-content"><p className="eyebrow eyebrow-light"><span /> 2027 Admissions</p><h1>Let&apos;s begin<br /><em>together.</em></h1><p>Applications are open for Senior One to Senior Five. Students awaiting PLE or UCE results may start the process now.</p></div></section><section className="application-section container"><div className="application-aside"><p className="eyebrow"><span /> A personal process</p><h2>Every application starts with <em>getting to know you.</em></h2><p>Complete the online form, download the official application form or collect a printed copy from the AMHS school office or an authorised local agent.</p><ol><li><span>01</span> Start your application</li><li><span>02</span> Attend the relevant interview</li><li><span>03</span> Submit verified results and join AMHS</li></ol><a href="/documents/amhs-admission-application-form.pdf" download className="text-link">Download the application form <Arrow /></a><a href="mailto:asabamemorialhighschool@gmail.com" className="text-link">Need support? Email admissions <Arrow /></a></div><AdmissionForm /></section></> }

const donationAreas = ["Books and learning materials", "ICT equipment", "Science facilities", "Library development", "Vocational equipment", "Sports equipment", "Boarding facilities", "Classroom development", "Water and sanitation", "Student support"];

function GivingPage({ sponsor }: { sponsor: boolean }) {
  const heading = sponsor ? ["One Student. One Opportunity.", "A Future Changed."] : ["Invest in Education.", "Create Lasting Impact."];
  return <><section className="page-hero page-hero-short"><div className="page-photo image-involved" /><div className="page-hero-overlay" /><div className="container page-hero-content"><p className="eyebrow eyebrow-light"><span /> {sponsor ? "Sponsor a child" : "Donate"}</p><h1>{heading[0]}<br /><em>{heading[1]}</em></h1><p>{sponsor ? "Some young people have the ability and determination to succeed but face circumstances that make continuing secondary education difficult." : "Your contribution can help strengthen the learning environment for current and future AMHS students."}</p></div></section>
    <section className="giving-section container">
      {sponsor
        ? <div className="giving-copy"><p className="eyebrow"><span /> Make an impact</p><h2>A sponsorship that <em>keeps a learner learning.</em></h2><p>AMHS&apos;s inclusive education model specifically recognises girls at risk, orphans, refugee learners and other vulnerable children, with bursary support contemplated according to assessed socio-economic circumstances.</p><p>Sponsors should receive appropriate, privacy-respecting updates about the programme and its educational impact.</p><a className="text-link" href="mailto:asabamemorialhighschool@gmail.com?subject=Sponsorship%20enquiry">Ask About Sponsorship <Arrow /></a></div>
        : <div className="giving-copy"><p className="eyebrow"><span /> Make an impact</p><h2>Support may be <em>directed towards:</em></h2><ul className="check-list check-list--columns">{donationAreas.map((area) => <li key={area}>{area}</li>)}</ul></div>}
      <div className="giving-payment-stack"><BankAccountCard /><GivingOptions sponsor={sponsor} /></div>
    </section></>;
}
