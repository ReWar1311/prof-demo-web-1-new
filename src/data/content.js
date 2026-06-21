// ============================================================
// CONTENT FILE — Edit all site text and images here.
// ============================================================

export const SITE = {
  groupName: "CQuInf",
  groupFullName: "Classical and Quantum Information Processing",
  tagline: "Shannon Theory · Machine Learning · Hypothesis Testing · Derandomization · Quantum Computation",
  institution: "Indian Institute of Technology Delhi",
  department: "Department of Electrical Engineering",
  logoPlaceholder: null, // Replace with imported image path when ready
};

// ─── HOMEPAGE ────────────────────────────────────────────────
export const HOME = {
  heroHeadline: "Where Classical and Quantum Information frontiers meet",
  heroSubtext:
    "The CQuInf group explores the mathematical foundations connecting Shannon information theory with quantum information processing, machine learning, hypothesis testing, and derandomization.",
  primaryTheme: "Shannon Theory and its Connections with Machine Learning, Hypothesis Testing and Derandomization",
  heroImage: null, // Replace with imported image path when available
  introText:
    "Hi, I am Aditya. After graduating from ECE background, I moved to study rigorous mathematical ideas in classical and quantum information theory at STCS, TIFR Mumbai. Here, I was extremely fortunate to be advised by Prof. Pranab Sen, someone whom I consider as the dream version of AI :) Then I hopped across country to take up a research position in Japan and then hoped across the continent to do a postdoc at RWTH Aachen, with amazing Mario Berta (https://marioberta.info/). Besides research I am passionate about Badminton and trekking. In the little spare time I try to meditate.",
};

// ─── PRINCIPAL INVESTIGATOR ──────────────────────────────────
export const PI = {
  name: "Dr. Aditya Nema",
  title: "Assistant Professor",
  department: "Department of Electrical Engineering",
  institution: "Indian Institute of Technology Delhi",
  photo: null, // Replace with imported photo path when available
  bio: [
    {
      period: "2013 – 2020",
      role: "Masters and PhD",
      theme: "Derandomization in Quantum Computing and Information Processing",
      institution: "School of Technology and Computer Science (STCS), Tata Institute of Fundamental Research, Mumbai",
    },
    {
      period: "2021 – 2023",
      role: "Specially Appointed Assistant Professor",
      theme: "Quantum Information Science",
      institution: "Graduate School of Informatics, Nagoya University, Japan",
    },
    {
      period: "2023 – 2025",
      role: "Postdoctoral Researcher",
      theme: "Classical and Quantum Information Theory",
      institution: "Institute for Quantum Information, RWTH Aachen University, Germany",
    },
  ],
  researchInterests: [
    "Shannon Information Theory",
    "Quantum Information Theory",
    "Hypothesis Testing",
    "Derandomization",
    "Machine Learning Theory",
    "Quantum Algorithms",
  ],
};

// ─── GROUP MEMBERS ───────────────────────────────────────────
export const GROUP = {
  introText:
    "Our group brings together individuals with strong mathematical backgrounds and a passion for exploring the foundations of classical and quantum information processing.",
  photo: null, // Replace with group photo path when available
  members: {
    pi: [
      {
        name: "Aditya Nema",
        role: "Principal Investigator",
        title: "Assistant Professor",
        photo: null,
        interests: "Shannon Theory, Quantum Information, Derandomization",
      },
    ],
    btech: [
      {
        name: "Shambhavi Malviya",
        salutation: "Ms.",
        role: "B.Tech. Student",
        photo: null,
        interests: "",
      },
    ],
    jrf: [
      {
        name: "Mudduranga B.K.",
        salutation: "Mr.",
        role: "Junior Research Fellow (JRF)",
        photo: null,
        interests: "",
      },
    ],
  },
};

// ─── RESEARCH ────────────────────────────────────────────────
export const RESEARCH = {
  comingSoon: true, // Set to false when content is ready
  introText:
    "Our research lies at the intersection of information theory, quantum computing, and mathematics.",
  // Add research areas, publications, and details below when ready
  areas: [
    {
      title: "Shannon Theory",
      description: "Fundamental limits of data compression and transmission, both in classical and quantum regimes.",
      icon: "∑",
    },
    {
      title: "Hypothesis Testing",
      description: "Statistical inference and its connections with information measures and quantum mechanics.",
      icon: "H",
    },
    {
      title: "Derandomization",
      description: "Transforming randomized algorithms into deterministic ones, with applications to quantum computing.",
      icon: "D",
    },
    {
      title: "Quantum Information Theory",
      description: "Mathematical structure of quantum channels, entanglement, and quantum capacity.",
      icon: "ψ",
    },
    {
      title: "Machine Learning Theory",
      description: "Information-theoretic perspectives on learning, generalization, and statistical estimation.",
      icon: "θ",
    },
  ],
  publications: [], // Add publications list here when ready
  detailedText: "", // Add detailed research description here
};

// ─── GRANTS ──────────────────────────────────────────────────
export const GRANTS = [
  {
    id: 1,
    agency: "ANRF",
    scheme: "Early Career Research Grant (ECRG)",
    period: "2026 – 2029",
    title: "ANRF ECRG",
    description: "", // Add grant description when available
    amount: "", // Add grant amount when available
  },
  {
    id: 2,
    agency: "IIT Delhi",
    scheme: "New Faculty Seed Grant (NFSG)",
    period: "2026 – 2029",
    title: "IIT Delhi NFSG",
    description: "", // Add grant description when available
    amount: "", // Add grant amount when available
  },
];

// ─── TALKS & PRESENTATIONS ───────────────────────────────────
export const TALKS = {
  comingSoon: false,
  introText: "Invited talks, conference presentations, and lectures by members of the CQuInf group.",
  description: "I have been fortunate to have nice and productive research visits and collaborations in my journey so far. These include:"
  list: [
      {
    id: 1,
    title: "One-shot reverse Shannon theorem and MAC simulation",
    event: "IIT Hyderabad",
    location: "Hyderabad, India",
    date: "May 2026",
    // type: "Invited" | "Contributed" | "Seminar",
    slides: "", // URL to slides
    video: "", // URL to recording
  }
  ], // Add talks in this format:
  // {
  //   id: 1,
  //   title: "Talk Title",
  //   event: "Conference / Workshop Name",
  //   location: "City, Country",
  //   date: "Month YYYY",
  //   type: "Invited" | "Contributed" | "Seminar",
  //   slides: "", // URL to slides
  //   video: "", // URL to recording
  // }
};

// ─── CONTACT & OPEN POSITIONS ────────────────────────────────
export const CONTACT = {
  address: {
    name: "Dr. Aditya Nema",
    title: "Assistant Professor, Department of Electrical Engineering",
    room: "Block II, Room No. 323",
    institution: "Indian Institute of Technology Delhi",
    area: "Hauz Khas, New Delhi – 110016, India",
  },
  email: "adityanema@ee.iitd.ac.in",
  departmentLink: "https://ee.iitd.ac.in",
  msAdmissionsLink: "https://ee.iitd.ac.in/admissions/ms", // Update if different URL

  lookingFor:
    "We are constantly looking for motivated and mathematically inclined individuals to join us at various levels:",

  positions: [
    {
      id: 1,
      level: "IIT Delhi B.Tech.",
      icon: "①",
      description:
        "If you are seriously inclined to work in a mathematically rigorous area, drop me a line.",
      note: null,
    },
    {
      id: 2,
      level: "MS(R)",
      icon: "②",
      description:
        "Please follow the guidelines on the EE department website for the application process.",
      note: "EE Department Admissions",
      noteLink: "https://ee.iitd.ac.in/admissions/ms",
    },
    {
      id: 3,
      level: "PhD",
      icon: "③",
      description:
        "The admission cycle is generally twice a year. If you are interested, get in touch soon and we can chart out a plan.",
      note: null,
    },
    {
      id: 4,
      level: "Postdoc",
      icon: "④",
      description:
        "For institute postdoc (limited), the hiring cycle is in April–June. Please keep an eye on the department call and this page. Another option is to apply via the ANRF postdoc position, for which I will be happy to support the application.",
      note: null,
    },
  ],

  importantNote:
    "Please note that the group works in a rigorous mathematical area as the primary inclination. If you are really motivated to study some abstract mathematics connected with classical and quantum information theory and quantum algorithms, you are welcome to drop me a line via email. Some of the topics that will be expected, or at least a strong inclination towards, are Linear Algebra, Real Analysis, Measure Theoretic Probability, and a strong hold on Signals and Systems.",

  quantumNote:
    "If you are not exposed to Quantum Computing and/or Quantum Information Theory but are interested in mathematical exploration of these areas, you don't have to worry — drop me a line.",

  internNote:
    "For interns: If I don't respond, please treat it as a polite NO — either I am already too occupied or I don't see a potential fit.",
};

// ─── MISC ────────────────────────────────────────────────────
export const MISC = {
  comingSoon: false,
  content: [
  ], // Add miscellaneous content here when ready
};

// ─── NAVIGATION ──────────────────────────────────────────────
export const NAV_LINKS = [
  { id: "home", label: "Home", path: "/" },
  { id: "group", label: "Group", path: "/group" },
  { id: "research", label: "Research", path: "/research" },
  { id: "grants", label: "Grants", path: "/grants" },
  { id: "talks", label: "Talks", path: "/talks" },
  { id: "contact", label: "Contact & Positions", path: "/contact" },
  { id: "misc", label: "Misc", path: "/misc" },
];
