/**
 * Replace the role-based entries below with verified staff details.
 * Add a square photo to `public/people/` and set `image`, for example:
 * image: "/people/jane-namusoke.jpg"
 */
export type Profile = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export const peopleProfiles: Record<"team" | "staff", Profile[]> = {
  team: [
    { initials: "SL", name: "School Principal", role: "School leadership", bio: "Provides strategic direction for AMHS and works closely with students, families and staff to sustain a strong, caring school culture." },
    { initials: "DP", name: "Deputy Principal", role: "Academic and student life", bio: "Coordinates the daily rhythm of the school, supporting high expectations in learning alongside a positive and well-organised student experience." },
    { initials: "DS", name: "Director of Studies", role: "Curriculum and assessment", bio: "Guides curriculum planning and assessment practice, helping teachers create clear pathways for every student to make progress." },
    { initials: "PW", name: "Pastoral Lead", role: "Wellbeing and safeguarding", bio: "Leads the systems and relationships that help students feel safe, heard and ready to learn with confidence." },
    { initials: "AC", name: "Activities Coordinator", role: "Enrichment and student voice", bio: "Creates opportunities for students to lead, perform, compete and contribute beyond the classroom through clubs, sport and service." },
    { initials: "FL", name: "Family Liaison", role: "Home–school partnership", bio: "Helps families stay connected to school life and ensures questions, transitions and important conversations are handled with care." },
  ],
  staff: [
    { initials: "SM", name: "Science & Mathematics Faculty", role: "Subject teachers", bio: "Builds strong foundations in reasoning, inquiry and problem-solving, helping students approach challenging ideas with confidence." },
    { initials: "EH", name: "English & Humanities Faculty", role: "Subject teachers", bio: "Develops articulate readers, thoughtful writers and curious learners who can understand different people, places and perspectives." },
    { initials: "CA", name: "Creative Arts & Languages", role: "Subject teachers", bio: "Encourages expression, communication and cultural awareness through creative practice, performance and language learning." },
    { initials: "DT", name: "Digital & Technical Learning", role: "Subject teachers", bio: "Helps students apply technology with purpose and develop practical skills for a rapidly changing world." },
    { initials: "LS", name: "Learning Support Team", role: "Student support", bio: "Works alongside teachers and families to remove barriers to learning and make sure each student receives the right support at the right time." },
    { initials: "SS", name: "Student Services Team", role: "Administration and care", bio: "Keeps the practical side of school life running smoothly, from student records and reception to everyday care and communication." },
  ],
};
