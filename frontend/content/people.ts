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
    { initials: "KP", name: "Kyamanywa Patrick", role: "School Headteacher", bio: "Provides strategic direction for AMHS and works closely with students, families and staff to sustain a strong, caring school culture.", image: "/people/staff/kyamanywa-patrick.jpg" },
    { initials: "KC", name: "Kamusiime Christine", role: "Deputy Headteacher", bio: "Coordinates the daily rhythm of the school, supporting high expectations in learning alongside a positive and well-organised student experience.", image: "/people/staff/kamusiime-christine.jpg" },
    { initials: "VU", name: "Valentine Uwachu", role: "Social Media Officer", bio: "Helps share the AMHS story with families, alumni and the wider community through school communication and digital media.", image: "/people/staff/valentine-uwachu.jpg" },
    { initials: "DS", name: "Director of Studies", role: "Curriculum and assessment", bio: "Guides curriculum planning and assessment practice, helping teachers create clear pathways for every student to make progress." },
    { initials: "PW", name: "Pastoral Lead", role: "Wellbeing and safeguarding", bio: "Leads the systems and relationships that help students feel safe, heard and ready to learn with confidence." },
    { initials: "AC", name: "Activities Coordinator", role: "Enrichment and student voice", bio: "Creates opportunities for students to lead, perform, compete and contribute beyond the classroom through clubs, sport and service." },
  ],
  staff: [
    { initials: "KP", name: "Kyamanywa Patrick", role: "School Headteacher", bio: "Provides strategic direction for AMHS and works closely with students, families and staff to sustain a strong, caring school culture.", image: "/people/staff/kyamanywa-patrick.jpg" },
    { initials: "KC", name: "Kamusiime Christine", role: "Deputy Headteacher", bio: "Coordinates the daily rhythm of the school, supporting high expectations in learning alongside a positive and well-organised student experience.", image: "/people/staff/kamusiime-christine.jpg" },
    { initials: "VU", name: "Valentine Uwachu", role: "Social Media Officer", bio: "Helps share the AMHS story with families, alumni and the wider community through school communication and digital media.", image: "/people/staff/valentine-uwachu.jpg" },
    { initials: "BJ", name: "Baguma Justus", role: "School Bursar", bio: "Supports the careful management of school finances and day-to-day administrative operations.", image: "/people/staff/baguma-justus.jpg" },
    { initials: "BS", name: "Bandiki Sibomana", role: "Security Guard", bio: "Helps maintain a safe, welcoming and secure environment for learners, staff and visitors.", image: "/people/staff/bandiki-sibomana.jpg" },
    { initials: "KG", name: "Kaburuli Grace", role: "School Matron", bio: "Supports student welfare, care and the routines that help learners feel settled at school.", image: "/people/staff/kaburuli-grace.jpg" },
    { initials: "OC", name: "Omirambe Charles", role: "Teacher for Geography and ICT", bio: "Teaches Geography and ICT, helping students understand their communities, environment and digital tools through practical, relevant learning.", image: "/people/staff/omirambe-charles.jpeg" },
    { initials: "MS", name: "Mujuni Silver", role: "Head of the Agriculture Department", bio: "Leads Agriculture learning and helps students connect practical skills with responsible stewardship.", image: "/people/staff/mujuni-silver.jpg" },
  ],
};

export const governanceProfiles: Record<"board" | "pta", Profile[]> = {
  board: [
    { initials: "BG", name: "Board of Governors Member", role: "PTA Treasurer", bio: "Supports responsible governance and the careful stewardship of resources for the AMHS community.", image: "/people/governance/board-member-pta-treasurer.jpg" },
  ],
  pta: [
    { initials: "BW", name: "Businge William", role: "PTA Chairperson", bio: "Leads the Parents Teachers Association in strengthening partnership between families and the school.", image: "/people/governance/businge-william.jpg" },
  ],
};

export type StudentLeader = {
  image: string;
  name?: string;
  role?: string;
};

/** Student leader portraits displayed on the Student Leadership page. */
export const studentLeaders: StudentLeader[] = [
  { image: "/people/student-leaders/basome-robinson.jpg", name: "Basome Robinson", role: "Head Boy" },
  { image: "/people/student-leaders/shania-asifiwe.jpg", name: "Shania Asifiwe", role: "Head Prefect" },
  { image: "/people/student-leaders/faith-michelle.jpg", name: "Faith Michelle", role: "Head Girl" },
  { image: "/people/student-leaders/lillian-sifa.jpg", name: "Lillian Sifa", role: "Assistant Head Girl" },
  { image: "/people/student-leaders/gift-emmanuel.jpg", name: "Gift Emmanuel", role: "Clubs and Societies" },
  { image: "/people/student-leaders/ibrahim-ssekaja.jpg", name: "Ibrahim Ssekaja", role: "Prefect in Charge of Welfare" },
  { image: "/people/student-leaders/mucunguzi-lawrence.jpg", name: "Mucunguzi Lawrence", role: "ICT Laboratory" },
  { image: "/people/student-leaders/sabiti-joseph.jpg", name: "Sabiti Joseph", role: "Sanitation Prefect" },
  { image: "/people/student-leaders/kobusinge-racheal.jpg", name: "Kobusinge Racheal", role: "Timekeeper" },
  { image: "/people/student-leaders/mbabazi-sarah.jpg", name: "Mbabazi Sarah", role: "Assistant Games and Sports" },
  { image: "/people/student-leaders/namudu-doreen.jpg", name: "Namudu Doreen", role: "Assistant Entertainment" },
];
