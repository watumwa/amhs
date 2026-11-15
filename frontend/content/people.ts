/** Personnel details and appointments recorded for the AMHS website. */
export type Profile = {
  initials: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
};

export const peopleProfiles: Record<"team" | "staff", Profile[]> = {
  "team": [
    {
      "initials": "BB",
      "name": "Bienvenu Byamungu",
      "role": "School Director",
      "bio": "School Director of Asaba Memorial High School.",
      "image": "/Images/AMHS-School-Director.JPG"
    },
    {
      "initials": "KP",
      "name": "Kyamanywa Patrick",
      "role": "Headteacher",
      "bio": "Provides strategic direction for AMHS and works closely with students, families and staff to sustain a strong, caring school culture.",
      "image": "/people/staff/kyamanywa-patrick.jpg"
    },
    {
      "initials": "KI",
      "name": "Kamatari Issa",
      "role": "Director of Studies",
      "bio": "Guides curriculum planning and assessment practice, helping teachers create clear pathways for every student to make progress.",
      "image": "/people/staff/kamatari-issa.jpeg"
    }
  ],
  "staff": [
    {
      "initials": "KP",
      "name": "Kyamanywa Patrick",
      "role": "Headteacher",
      "bio": "Provides strategic direction for AMHS and works closely with students, families and staff to sustain a strong, caring school culture.",
      "image": "/people/staff/kyamanywa-patrick.jpg"
    },
    {
      "initials": "KC",
      "name": "Christine Kamusiime",
      "role": "History/CRE Teacher",
      "bio": "Teaches History and Christian Religious Education at Asaba Memorial High School.",
      "image": "/people/staff/kamusiime-christine.jpg"
    },
    {
      "initials": "KI",
      "name": "Kamatari Issa",
      "role": "Director of Studies",
      "bio": "Guides curriculum planning and assessment practice, helping teachers create clear pathways for every student to make progress.",
      "image": "/people/staff/kamatari-issa.jpeg"
    },
    {
      "initials": "VU",
      "name": "Valentine Uwachu",
      "role": "Social Media Officer",
      "bio": "Helps share the AMHS story with families, alumni and the wider community through school communication and digital media.",
      "image": "/people/staff/valentine-uwachu.jpg"
    },
    {
      "initials": "BJ",
      "name": "Baguma Justus",
      "role": "School Bursar",
      "bio": "Supports the careful management of school finances and day-to-day administrative operations.",
      "image": "/people/staff/baguma-justus.jpg"
    },
    {
      "initials": "BS",
      "name": "Bandiki Sibomana",
      "role": "Security Guard",
      "bio": "Helps maintain a safe, welcoming and secure environment for learners, staff and visitors.",
      "image": "/people/staff/bandiki-sibomana.jpg"
    },
    {
      "initials": "KG",
      "name": "Kaburuli Grace",
      "role": "School Matron",
      "bio": "Supports student welfare, care and the routines that help learners feel settled at school.",
      "image": "/people/staff/kaburuli-grace.jpg"
    },
    {
      "initials": "OC",
      "name": "Omirambe Charles",
      "role": "Teacher for Geography and ICT",
      "bio": "Teaches Geography and ICT, helping students understand their communities, environment and digital tools through practical, relevant learning.",
      "image": "/people/staff/omirambe-charles.jpeg"
    },
    {
      "initials": "MS",
      "name": "Mujuni Silver",
      "role": "Head of the Agriculture Department",
      "bio": "Leads Agriculture learning and helps students connect practical skills with responsible stewardship.",
      "image": "/people/staff/mujuni-silver.jpg",
      "imagePosition": "center top"
    },
    {
      "initials": "AI",
      "name": "Apio Isabella",
      "role": "English Teacher",
      "bio": "Teaches English and supports students to build confident communication, reading and writing skills.",
      "image": "/people/staff/apio-isabella.jpeg"
    }
  ]
};

// Group by recorded duties; administrative titles do not imply teaching subjects.
export const staffGroups = [
  { title: "Teaching Staff", profiles: peopleProfiles.staff.filter(profile => ["Headteacher","History/CRE Teacher","Teacher for Geography and ICT","Head of the Agriculture Department","English Teacher"].includes(profile.role)) },
  { title: "Non-Teaching Staff", profiles: peopleProfiles.staff.filter(profile => !["Headteacher","History/CRE Teacher","Teacher for Geography and ICT","Head of the Agriculture Department","English Teacher"].includes(profile.role)) },
];

export const governanceProfiles: Record<"board" | "pta", Profile[]> = {
  "board": [
    {
      "initials": "BB",
      "name": "Bienvenu Byamungu",
      "role": "Board Member — Representative of the Foundation Body (AMEF)",
      "bio": "Represents Asaba Memorial Education Foundation (AMEF), the school's foundation body, on the Board of Governors. Contributes to institutional governance, strategic direction and alignment with the Foundation's educational mission and long-term vision.",
      "image": "/Images/AMHS-School-Director.JPG"
    },
    {
      "initials": "KP",
      "name": "Kyamanywa Patrick",
      "role": "Secretary to the Board of Governors",
      "bio": "Serves as Secretary to the Board of Governors, supporting the coordination of Board meetings, documentation, communication and implementation follow-up, while providing a link between school administration and institutional governance.",
      "image": "/people/staff/kyamanywa-patrick.jpg"
    },
    {
      "initials": "AF",
      "name": "Amanya Fred",
      "role": "Board of Governors Member",
      "bio": "Serves on the Board of Governors, contributing to institutional oversight, accountability and the strategic development of Asaba Memorial High School.",
      "image": "/people/governance/board-member-pta-treasurer.jpg"
    },
    {
      "initials": "MC",
      "name": "Mugisa Chrisesistom",
      "role": "Board of Governors Member",
      "bio": "Supports the Board of Governors in providing responsible oversight and strengthening the AMHS community.",
      "image": "/people/governance/mugisa-chrisesistom.jpeg"
    },
    {
      "initials": "PM",
      "name": "Pastor Mpindu Jackson",
      "role": "Board of Governors Member",
      "bio": "Serves as a member of the Board of Governors, contributing to institutional governance, accountability and the continued development of Asaba Memorial High School.",
      "image": "/people/staff/pastor-mpindu-jackson.jpeg"
    }
  ],
  "pta": [
    {
      "initials": "BW",
      "name": "Businge William",
      "role": "PTA Chairperson",
      "bio": "Leads the Parents Teachers Association in strengthening partnership between families and the school.",
      "image": "/people/governance/businge-william.jpg"
    },
    {
      "initials": "NA",
      "name": "Nsekanabo Annet",
      "role": "PTA Vice Chairperson",
      "bio": "Supports PTA leadership and helps strengthen communication and cooperation between parents, teachers and the school.",
      "image": "/people/governance/nsekanabo-annet.jpg"
    },
    {
      "initials": "BJ",
      "name": "Besige Joseph",
      "role": "PTA Advisor",
      "bio": "Provides guidance to the PTA as it works with families and school leaders to support learners and school development.",
      "image": "/people/governance/besige-joseph.jpg"
    },
    {
      "initials": "FM",
      "name": "Fetura Millian",
      "role": "PTA Member",
      "bio": "Represents parents and contributes to PTA discussions on learner welfare, family engagement and school development.",
      "image": "/people/governance/fetura-millian.jpg"
    },
    {
      "initials": "AF",
      "name": "Amanya Fred",
      "role": "PTA Treasurer",
      "bio": "Supports the Parent–Teacher Association in financial stewardship, accountability and coordination of resources that contribute to the welfare and development of the school community.",
      "image": "/people/governance/board-member-pta-treasurer.jpg"
    }
  ]
};

export type StudentLeader = {
  image: string;
  imagePosition?: string;
  name?: string;
  role?: string;
};

/** Student leader portraits displayed on the Student Leadership page. */
export const studentLeaders: StudentLeader[] = [
  { image: "/people/student-leaders/shania-asifiwe.jpg", name: "Shania Asifiwe", role: "Head Prefect" },
  { image: "/people/student-leaders/basome-robinson.jpg", name: "Basome Robinson", role: "Head Boy" },
  { image: "/people/student-leaders/faith-michelle.jpg", imagePosition: "center top", name: "Faith Michelle", role: "Head Girl" },
  { image: "/Images/Student%20Leadership/Aseera_Linus_Assistant_Head_Boy.jpeg", name: "Aseera Linus", role: "Assistant Head Boy" },
  { image: "/people/student-leaders/lillian-sifa.jpg", name: "Lillian Sifa", role: "Assistant Head Girl" },
  { image: "/Images/Student%20Leadership/Faida_Jane_Discipline_prefect.jpeg", name: "Faida Jane", role: "Discipline Prefect" },
  { image: "/Images/Student%20Leadership/Nyakato_Imelda_Academic_prefect.jpeg", name: "Nyakato Imelda", role: "Academic Prefect" },
  { image: "/people/student-leaders/kobusinge-racheal.jpg", imagePosition: "center top", name: "Kobusinge Racheal", role: "Timekeeper" },
  { image: "/people/student-leaders/ibrahim-ssekaja.jpg", name: "Ibrahim Ssekaja", role: "Prefect in Charge of Welfare" },
  { image: "/Images/Student%20Leadership/Alinda_Angelica_Information_prefect.jpeg", imagePosition: "center top", name: "Alinda Angelica", role: "Information Prefect" },
  { image: "/Images/Student%20Leadership/Nansiima_Mercy_Religious_Affairs_Prefect.jpeg", name: "Nansiima Mercy", role: "Religious Affairs Prefect" },
  { image: "/people/student-leaders/mucunguzi-lawrence.jpg", name: "Mucunguzi Lawrence", role: "ICT Laboratory" },
  { image: "/people/student-leaders/gift-emmanuel.jpg", name: "Gift Emmanuel", role: "Clubs and Societies" },
  { image: "/Images/Student%20Leadership/Asiimwe_Isreal_Games_and_Sports_Prefect.jpeg", name: "Asiimwe Isreal", role: "Games and Sports Prefect" },
  { image: "/people/student-leaders/sabiti-joseph.jpg", name: "Sabiti Joseph", role: "Sanitation Prefect" },
  { image: "/people/student-leaders/mbabazi-sarah.jpg", imagePosition: "center top", name: "Mbabazi Sarah", role: "Assistant Games and Sports" },
  { image: "/people/student-leaders/namudu-doreen.jpg", name: "Namudu Doreen", role: "Assistant Entertainment" },
];
