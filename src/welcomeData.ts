import {
  FeedEventCard,
  FeedJobCard,
  FeedLiveSportsCard,
  FeedUpdateCard,
  CampusInsiderNotice,
  CandidateProfile,
  PricingPlan,
  StakeholderPersona,
  InstitutionType
} from './types';

export const FOUNDER_EMAIL = 'founder@thecampusbuzz.in';

export const HERO_HIGHLIGHTS = [
  'Passive Institution Verification',
  'Real-Time Live Sports Scoring',
  'Talent Discovery for Recruiters',
  'Private Campus Insider Layer',
  '100% Free For Schools & Students'
];

export const LIVE_ACTIVITY_TICKER = [
  '🏆 Pune Tech Fest 2026: Team "AlgoRiders" won 1st Place (Verified by COEP)',
  '⚡ Cricket Inter-College Derby: NIT Pune vs DY Patil Live in 18th Over',
  '💼 Razorpay posted 14 new SDE & Frontend Internships for Batch 2026-27',
  '⚽ Bangalore Football Cup: Round of 16 stream starting in 25 mins',
  '🏛️ Delhi Tech Community announced 48hr GenAI Hackathon with ₹2.5L Prize'
];

export const FEED_EVENTS: FeedEventCard[] = [
  {
    id: 'ev-1',
    type: 'event',
    title: 'Bharat Autonomous AI & Web3 Hackathon 2026',
    institutionName: 'NIT Pune (Autonomous)',
    institutionType: 'College',
    verified: true,
    category: 'Technical',
    mode: 'Hybrid',
    date: 'Oct 24 - 26, 2026',
    venue: 'APJ Abdul Kalam Innovation Centre & Online',
    city: 'Pune',
    prizePool: '₹2,50,000',
    spotsTotal: 150,
    spotsRemaining: 28,
    bannerUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900',
    registrationDeadline: 'Oct 20, 2026 (Closing Soon)',
    description: '48-hour national hackathon on Agentic AI, Autonomous Workflows, and Zero-Knowledge Proofs. Verified certificates awarded directly to your profile.',
    tags: ['Agentic AI', 'Web3', 'Cash Prize', 'Recruiter Fast-Track']
  },
  {
    id: 'ev-2',
    type: 'event',
    title: 'Pune City Premier Football League (U-21 Knockout)',
    institutionName: 'Maharashtra Sports League',
    institutionType: 'Sports Organizer',
    verified: true,
    category: 'Sports',
    mode: 'Offline',
    date: 'Nov 02 - 08, 2026',
    venue: 'Balewadi Stadium Ground 2',
    city: 'Pune',
    prizePool: '₹1,00,000 + Trophy',
    spotsTotal: 32,
    spotsRemaining: 4,
    bannerUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=900',
    registrationDeadline: 'Oct 28, 2026',
    description: 'Official U-21 knockout tournament. Match stats, goals, and yellow cards are automatically updated to your verified sports career record.',
    tags: ['Football', 'Player Stats', 'Live Streamed', 'Scouts Attending']
  },
  {
    id: 'ev-3',
    type: 'event',
    title: 'Design Systems & UI Engineering Summit',
    institutionName: 'Bangalore Design Community',
    institutionType: 'Community',
    verified: true,
    category: 'Workshop',
    mode: 'Online',
    date: 'Nov 14, 2026',
    venue: 'CampusBuzz Live Stage / Virtual',
    city: 'Bangalore',
    prizePool: 'Free Swag + Pro Licenses',
    spotsTotal: 500,
    spotsRemaining: 114,
    bannerUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=900',
    registrationDeadline: 'Nov 12, 2026',
    description: 'Hands-on interactive masterclass with Lead Designers from Swiggy, CRED, and Google on building enterprise-scale design tokens.',
    tags: ['Figma', 'React UI', 'Open to All', 'Portfolio Boost']
  },
  {
    id: 'ev-4',
    type: 'event',
    title: 'All-India Inter-School Science & Robotics Olympiad',
    institutionName: 'Delhi Public School R.K. Puram',
    institutionType: 'School',
    verified: true,
    category: 'Cultural',
    mode: 'Offline',
    date: 'Nov 20, 2026',
    venue: 'Auditorium Complex',
    city: 'Delhi NCR',
    prizePool: '₹75,000 Scholarships',
    spotsTotal: 100,
    spotsRemaining: 22,
    bannerUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=900',
    registrationDeadline: 'Nov 15, 2026',
    description: 'Grade 9-12 students showcase autonomous robotics and IoT environmental sensors. Direct discovery channel for top engineering institutes.',
    tags: ['Robotics', 'High School', 'Scholarships']
  }
];

export const FEED_JOBS: FeedJobCard[] = [
  {
    id: 'job-1',
    type: 'job',
    companyName: 'PhonePe',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120',
    verified: true,
    roleTitle: 'Software Development Engineer - Backend (Go/Distributed Systems)',
    roleType: 'Full-time',
    location: 'Bangalore / Pune (Hybrid)',
    salaryRange: '₹16 - 24 LPA',
    eligibility: 'Batch 2025 & 2026 Graduates or 1-2 Yrs Experience',
    deadline: 'Oct 30, 2026',
    skillsRequired: ['Go', 'Microservices', 'PostgreSQL', 'Kafka'],
    description: 'High-scale payments processing team. Candidates with verified hackathon wins or open-source community contributions prioritized.',
    applicantsCount: 342
  },
  {
    id: 'job-2',
    type: 'job',
    companyName: 'CRED',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=120',
    verified: true,
    roleTitle: 'Frontend Engineering Intern (React / React Native / Canvas)',
    roleType: 'Internship',
    location: 'Bangalore (On-site)',
    salaryRange: '₹60,000/mo Stipend (PPO: ₹22 LPA)',
    eligibility: 'Pre-final & Final Year Students / Self-Taught Devs',
    deadline: 'Nov 05, 2026',
    skillsRequired: ['TypeScript', 'TailwindCSS', 'Framer Motion', 'Web Performance'],
    description: 'Craft buttery-smooth consumer experiences. Your CampusBuzz verified project submissions count directly as portfolio evidence.',
    applicantsCount: 519
  },
  {
    id: 'job-3',
    type: 'job',
    companyName: 'Zomato Live & District',
    companyLogo: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=120',
    verified: true,
    roleTitle: 'Campus Operations & Sports Partnerships Associate',
    roleType: 'Full-time',
    location: 'Delhi NCR / Mumbai / Pune',
    salaryRange: '₹9 - 13 LPA',
    eligibility: 'Any Degree · Former Sports Captains or Fest Heads Preferred',
    deadline: 'Nov 10, 2026',
    skillsRequired: ['Event Operations', 'Sponsorship Management', 'Vendor Logistics'],
    description: 'Looking for individuals with proven campus leadership, inter-college fest organizing track records, or verified sports credentials.',
    applicantsCount: 188
  }
];

export const FEED_LIVE_SPORTS: FeedLiveSportsCard[] = [
  {
    id: 'sports-1',
    type: 'live_sports',
    sport: 'Cricket',
    tournamentName: 'West Zone Inter-Collegiate T20 Championship 2026',
    organizerName: 'Pune Sports Council & SPPU',
    institutionType: 'Sports Organizer',
    verified: true,
    teamA: { name: 'NIT Pune Lions', score: '164/5', oversOrTime: '18.2 Ov' },
    teamB: { name: 'COEP Warriors', score: '158/9', oversOrTime: '20.0 Ov' },
    statusNote: 'NIT Pune requires 7 runs from 10 balls to win with 5 wickets in hand!',
    viewersCount: 2840,
    matchStage: 'Semi-Final 1 · LIVE',
    liveStreamAvailable: true,
    venue: 'Subrata Roy Stadium Ground, Pune'
  },
  {
    id: 'sports-2',
    type: 'live_sports',
    sport: 'Football',
    tournamentName: 'All-India Inter-University Football Shield',
    organizerName: 'Bangalore Sports Federation',
    institutionType: 'Sports Organizer',
    verified: true,
    teamA: { name: 'Loyola College Chennai', score: '2', oversOrTime: '74\' Mins' },
    teamB: { name: 'St. Xavier\'s Mumbai', score: '1', oversOrTime: '74\' Mins' },
    statusNote: 'Goal! Loyola takes the lead from a header off the corner kick in 72nd min.',
    viewersCount: 1420,
    matchStage: 'Quarter-Final 3 · LIVE',
    liveStreamAvailable: true,
    venue: 'Bangalore Football Stadium'
  }
];

export const FEED_UPDATES: FeedUpdateCard[] = [
  {
    id: 'update-1',
    type: 'update',
    institutionName: 'IIT Bombay E-Cell',
    institutionType: 'College',
    verified: true,
    postedTimeAgo: '3 hours ago',
    content: 'Thrilled to unveil that 34 student startup teams from our Incubation Track have officially secured pre-seed commitments totaling ₹4.2 Crores! Certificates and equity verification badges have been pushed to their CampusBuzz student records.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900',
    likesCount: 524,
    commentsCount: 68,
    sharesCount: 92,
    badgeTag: 'Startup Incubation'
  },
  {
    id: 'update-2',
    type: 'update',
    institutionName: 'Pune Rust & Systems Developers',
    institutionType: 'Community',
    verified: true,
    postedTimeAgo: '6 hours ago',
    content: 'Huge shoutout to all 120 developers who attended our low-level Linux Kernel & eBPF workshop on Saturday! 4 participants were directly approached by kernel engineering managers from RedHat and AWS who monitored our event activity ledger.',
    likesCount: 312,
    commentsCount: 41,
    sharesCount: 55,
    badgeTag: 'Community Meetup'
  }
];

export const CAMPUS_INSIDER_NOTICES: CampusInsiderNotice[] = [
  // ── Colleges ──
  {
    id: 'in-col-1',
    category: 'Placement',
    title: 'Google & Atlassian SDE Drive — Slot 1 Shortlist',
    author: 'Prof. S. R. Kulkarni',
    authorRole: 'Head, Training & Placement',
    department: 'Central Placement Office',
    date: 'Today, 09:30 AM',
    urgent: true,
    content: '42 candidates shortlisted via verified profiles. Pre-placement talk today at 4:30 PM in Audi-2.',
    attachmentName: 'Shortlist_SDE_Slot1.pdf',
    badgeTag: 'College SaaS'
  },
  {
    id: 'in-col-2',
    category: 'Club',
    title: 'Coding Club: 36h Internal HackNight Rules',
    author: 'Aditi Varma',
    authorRole: 'Student President',
    department: 'Computer Engineering Society',
    date: 'Yesterday, 04:15 PM',
    urgent: false,
    content: 'Team registrations close tonight at 11:59 PM. Mentors from Microsoft IDC evaluating on Friday.',
    attachmentName: 'HackNight_Guidelines.pdf',
    badgeTag: 'College SaaS'
  },
  {
    id: 'in-col-3',
    category: 'Sports',
    title: 'Inter-Department Cricket & Badminton Trials',
    author: 'Coach Rajeev Deshmukh',
    authorRole: 'Director of Physical Education',
    department: 'Sports & Gymnasium Dept',
    date: 'Oct 04, 2026',
    urgent: false,
    content: 'Trials for West Zone 1st XI tomorrow 7:00 AM on Main Turf. Match performances update live to sports ledger.',
    attachmentName: 'Trial_Schedules.pdf',
    badgeTag: 'College SaaS'
  },
  {
    id: 'in-col-4',
    category: 'Notice',
    title: 'Dean Innovation Seed Grant — ₹1.5 Lakhs per Team',
    author: 'Office of the Dean R&D',
    authorRole: 'Dean Academic Affairs',
    department: 'Research & Innovation Wing',
    date: 'Oct 03, 2026',
    urgent: false,
    content: 'Seed funding for top 5 autonomous hardware & IoT prototypes. Apply directly via your student portal.',
    attachmentName: 'Grant_Application_2026.pdf',
    badgeTag: 'College SaaS'
  },

  // ── Tech Communities ──
  {
    id: 'in-com-1',
    category: 'Community',
    title: 'Weekend Rust & Linux Kernel Sprint',
    author: 'Karan Saxena',
    authorRole: 'Community Lead',
    department: 'Bangalore Rust Circle',
    date: 'Today, 11:00 AM',
    urgent: true,
    content: 'Private sprint room open for 30 verified members building async network drivers. Mentor code reviews at 6 PM.',
    attachmentName: 'Sprint_Tasks.md',
    badgeTag: 'Community SaaS'
  },
  {
    id: 'in-com-2',
    category: 'Community',
    title: 'Speaker Lineup & CFP Selection for DevSummit',
    author: 'Pooja Iyer',
    authorRole: 'Program Chair',
    department: 'Cloud Native Foundation',
    date: 'Yesterday, 02:00 PM',
    urgent: false,
    content: '4 talk proposals selected. Selected speakers receive verified speaker badges permanently on their dossier.',
    attachmentName: 'Speaker_Schedule.pdf',
    badgeTag: 'Community SaaS'
  },

  // ── Companies / Recruiters ──
  {
    id: 'in-corp-1',
    category: 'Drive',
    title: 'Campus Drive Slot Confirmation: NIT Pune & SPPU',
    author: 'Priyanka Sen',
    authorRole: 'University Relations Lead',
    department: 'Fintech Scaleup Talent Team',
    date: 'Today, 08:45 AM',
    urgent: true,
    content: 'Interview rooms and online coding rounds confirmed for Nov 14-16. Panels synchronized with placement cell.',
    attachmentName: 'Drive_Slot_Confirmation.pdf',
    badgeTag: 'Company SaaS'
  },
  {
    id: 'in-corp-2',
    category: 'Drive',
    title: '18 Shortlisted Candidates from Bharat AI Hackathon',
    author: 'Tech Talent Scout',
    authorRole: 'Senior Recruiter',
    department: 'Engineering Hiring',
    date: 'Yesterday, 05:30 PM',
    urgent: false,
    content: 'Top 3 team members flagged for fast-track final interviews with VP of Engineering. Direct offer letters ready.',
    attachmentName: 'Candidate_Dossiers.pdf',
    badgeTag: 'Company SaaS'
  },

  // ── Sports Organizers ──
  {
    id: 'in-sp-1',
    category: 'Sports',
    title: 'West Zone Knockout Squad Roster Verification',
    author: 'Vikram Jadhav',
    authorRole: 'General Secretary',
    department: 'Maharashtra Sports League',
    date: 'Oct 04, 2026',
    urgent: false,
    content: '16 team lineups verified by team captains. Ball-by-ball scorers assigned for live broadcast.',
    attachmentName: 'Official_Rosters.pdf',
    badgeTag: 'Sports SaaS'
  },
  {
    id: 'in-sp-2',
    category: 'Sports',
    title: 'Match 14 MVP Awards & Career Stat Sync',
    author: 'Chief Referee Board',
    authorRole: 'Match Commissioner',
    department: 'Cricket Tournament Committee',
    date: 'Oct 03, 2026',
    urgent: false,
    content: 'Player scores and MVP awards finalized. Batting averages automatically pushed to player profiles.',
    badgeTag: 'Sports SaaS'
  }
];

export const TALENT_PROFILES: CandidateProfile[] = [
  {
    id: 'cand-1',
    name: 'Aarav Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    headline: 'Autonomous AI Engineer · Final Year CSE',
    institution: 'NIT Pune',
    institutionType: 'College',
    verifiedBadge: 'Verified Student · NIT Pune · Batch 2026',
    city: 'Pune',
    skills: ['PyTorch', 'Distributed Systems', 'FastAPI', 'Rust'],
    hackathonWins: 3,
    techEventsAttended: 14,
    sportsCaptain: false,
    openTo: ['Full-time SDE', 'Research Fellowship']
  },
  {
    id: 'cand-2',
    name: 'Neha Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    headline: 'State Football Player & Product Designer · Sports Tech',
    institution: 'Maharashtra Sports League & SPPU',
    institutionType: 'Community',
    verifiedBadge: 'Verified Athlete & Design Lead',
    city: 'Mumbai',
    skills: ['Product Design', 'Figma', 'Sports Analytics', 'Team Leadership'],
    hackathonWins: 1,
    techEventsAttended: 8,
    sportsCaptain: true,
    openTo: ['Product Design Roles', 'Sports Tech Fellowships']
  },
  {
    id: 'cand-3',
    name: 'Rohan Mehra',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    headline: 'Senior High School Robotics Innovator · Class 12',
    institution: 'DPS R.K. Puram',
    institutionType: 'School',
    verifiedBadge: 'Verified Student · DPS RK Puram · Batch 2027',
    city: 'Delhi NCR',
    skills: ['Embedded C', 'ROS2', 'Computer Vision', 'Circuit Design'],
    hackathonWins: 2,
    techEventsAttended: 11,
    sportsCaptain: false,
    openTo: ['Summer Internships', 'University Mentorships']
  },
  {
    id: 'cand-4',
    name: 'Pooja Iyer',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    headline: 'DevOps & Cloud Systems Architect · Community Organizer',
    institution: 'Bangalore Cloud Native Community',
    institutionType: 'Community',
    verifiedBadge: 'Verified Community Lead · 500+ Members',
    city: 'Bangalore',
    skills: ['Kubernetes', 'Terraform', 'Golang', 'eBPF'],
    hackathonWins: 2,
    techEventsAttended: 24,
    sportsCaptain: false,
    openTo: ['Staff DevOps Engineer', 'Conference Speaker']
  }
];

export const STAKEHOLDERS: StakeholderPersona[] = [
  {
    id: 'College',
    title: 'Colleges & Universities',
    tagline: 'Run Public Events & Private Campus Insider',
    pricingTag: 'From ₹2,999/mo (SaaS)',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    description: 'Transform your institution from an isolated silo into a vibrant, nationally visible brand. Seamlessly manage fests, auto-verify student achievements, stream sports, and run private department channels with Campus Insider.',
    keyBenefits: [
      'Campus Insider: Private intranet for placements, notices, and clubs',
      'Instant Auto-Verification of hackathons, fests, and sports trophies',
      'Real-time live sports scorekeeping & match streaming',
      'Deep recruitment analytics showing company interest and student traction'
    ],
    quote: {
      text: 'Campus Insider eliminated 15 separate WhatsApp spam groups for our college while putting our national hackathons in front of 50,000+ engineers.',
      author: 'Dr. Anand Joshi',
      role: 'Dean of Student Affairs, Top Engineering Institute'
    }
  },
  {
    id: 'School',
    title: 'High Schools (K-12)',
    tagline: '100% Free Forever — Habit Forming by Design',
    pricingTag: '₹0 Free Forever (Strategic Acquisition)',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'High schools join CampusBuzz completely free of cost. Build student aspirations early, run robotics competitions, sports days, and science exhibitions on an institution-verified stage that colleges monitor for scouting talent.',
    keyBenefits: [
      '100% Free institutional verified page with zero hidden fees',
      'School students get verified badges that transition into their college careers',
      'Broadcast annual functions, debate contests, and athletic days to parents',
      'Early habit-forming portfolio building before entering university'
    ],
    quote: {
      text: 'Our 11th and 12th graders now carry permanent, verified certificates for science olympiads that universities actually look at during admissions.',
      author: 'Sunita Malhotra',
      role: 'Principal, DPS R.K. Puram'
    }
  },
  {
    id: 'Community',
    title: 'Tech & Cultural Communities',
    tagline: 'City Meetups, Hacker Collectives & NGOs',
    pricingTag: 'From ₹1,499/mo (SaaS)',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'For city-level developer circles, design clubs, startup accelerators, and cultural groups. Stop letting your events get buried on Instagram stories after 24 hours. Own an indexed, verifiable institutional presence.',
    keyBenefits: [
      'Verified community badges for all active members and speakers',
      'Host weekend workshops, demo days, and open-source hack nights',
      'Manage member rosters and track recurring attendance with QR check-in',
      'Direct pipeline to corporate sponsors and talent scouts'
    ],
    quote: {
      text: 'Instead of dead Meetup.com links or temporary Discord announcements, our attendees have permanent verifiable badges that boost their careers.',
      author: 'Karan Saxena',
      role: 'Founder, Bangalore Rust Community'
    }
  },
  {
    id: 'Company',
    title: 'Companies & Recruiters',
    tagline: 'Replace Dead Resumes with Verified Activity Data',
    pricingTag: 'From ₹2,999/mo (SaaS)',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Stop recruiting through bloated 2-page PDFs filled with inflated self-claims. Filter India’s largest active talent pool by verified hackathon rankings, event attendance, and leadership track records.',
    keyBenefits: [
      'People Discovery: Filter talent by "Won 2+ Hackathons" or "Top Sports Athlete"',
      'Host branded hiring challenges, hackathons, and company open-days',
      'Schedule on-campus drives targeting specific colleges with 1 click',
      'Build long-term employer brand equity directly inside campus feeds'
    ],
    quote: {
      text: 'We hired 6 junior engineers from CampusBuzz who had verifiable top 5 rankings across 3 national hackathons. Zero guesswork, 10x better quality.',
      author: 'Priyanka Sen',
      role: 'Director of Talent Acquisition, Fintech Scaleup'
    }
  },
  {
    id: 'Sports Organizer',
    title: 'Standalone Sports Organizers',
    tagline: 'Box Cricket, City Leagues & Martial Arts Tournaments',
    pricingTag: 'From ₹999/mo (SaaS)',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    description: 'Sports in India extend far beyond college campuses. Any private tournament organizer, turf league, or martial arts academy can now publish schedules, manage live ball-by-ball scoreboards, and record player stats.',
    keyBenefits: [
      'Real-time live score management panel for cricket, football, basketball & chess',
      'Automated player career stat ledger (runs, goals, MVP awards, match history)',
      'Live stream player with real-time viewer chat and spectator count',
      'Tournament registration ticketing and instant bracket generator'
    ],
    quote: {
      text: 'Local tournament organizers never had tools like Cricbuzz or ESPN. CampusBuzz gives us live scoring and builds permanent athlete records for every kid.',
      author: 'Vikram Jadhav',
      role: 'General Secretary, Pune Premier Turf Association'
    }
  }
];

export const PRICING_BY_ENTITY: Record<
  Exclude<InstitutionType, 'School'>,
  PricingPlan[]
> = {
  College: [
    {
      name: 'Starter',
      monthlyPrice: 2999,
      description: 'Ideal for single departments or growing regional institutes.',
      features: [
        { name: 'Verified College Badge & Public Profile', included: true },
        { name: 'Up to 10 Events / Month', included: true },
        { name: '5 Daily Campus Updates / Month', included: true },
        { name: 'Campus Insider (Private College Intranet)', included: true },
        { name: 'Basic Registration & Attendance QR', included: true },
        { name: 'Full Analytics Dashboard', included: false },
        { name: 'Live Sports Streaming & Scoreboard', included: false },
        { name: 'WhatsApp Notifications', included: false },
        { name: 'Promoted Feed Placements', included: false }
      ]
    },
    {
      name: 'Growth',
      monthlyPrice: 5499,
      popular: true,
      description: 'For active campuses hosting fests, inter-college sports, and placements.',
      features: [
        { name: 'Verified College Badge & Public Profile', included: true },
        { name: 'Unlimited Event Postings', included: true },
        { name: 'Unlimited Daily Campus Updates', included: true },
        { name: 'Campus Insider (HOD, Faculty & Student Roles)', included: true },
        { name: 'Full Analytics & Recruitment Insights', included: true },
        { name: 'Push + Email + WhatsApp Notifications', included: true },
        { name: 'Live Sports Streaming & Live Scoreboard', included: true },
        { name: 'Automatic Achievement Verification on Student Profiles', included: true },
        { name: 'Priority Feed Placement', included: false }
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: 8999,
      description: 'Full enterprise suite for premier universities and multi-campus colleges.',
      features: [
        { name: 'All Growth Features Included', included: true },
        { name: 'Unlimited Event Postings & Fests', included: true },
        { name: 'Multi-Campus & Inter-College Federation Network', included: true },
        { name: 'Promoted National Listings (2 Sponsored Slots/Mo)', included: true },
        { name: 'Priority Feed Algorithm Placement', included: true },
        { name: 'Direct Recruiter & Company Connect Portal', included: true },
        { name: 'Dedicated Account Manager & 24/7 Phone Support', included: true },
        { name: 'Custom ERP Data Sync & Single Sign-On', included: true }
      ]
    }
  ],
  Community: [
    {
      name: 'Starter',
      monthlyPrice: 1499,
      description: 'For newly formed tech meetups and student chapters.',
      features: [
        { name: 'Verified Community Badge', included: true },
        { name: 'Up to 10 Events / Month', included: true },
        { name: '5 Updates / Month', included: true },
        { name: 'Member Roster Tracking', included: true },
        { name: 'Full Analytics', included: false },
        { name: 'WhatsApp Reminders', included: false }
      ]
    },
    {
      name: 'Growth',
      monthlyPrice: 2999,
      popular: true,
      description: 'For established city tech circles, design groups, and clubs.',
      features: [
        { name: 'Verified Community Badge', included: true },
        { name: 'Unlimited Events & Workshops', included: true },
        { name: 'Unlimited Daily Updates', included: true },
        { name: 'Member Verified Badges for Profiles', included: true },
        { name: 'WhatsApp & Email Notifications', included: true },
        { name: 'Full Analytics & Attendee Demographics', included: true }
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: 4999,
      description: 'For national developer federations and multi-city chapters.',
      features: [
        { name: 'All Growth Features Included', included: true },
        { name: 'Sponsorship Matching Marketplace', included: true },
        { name: 'Promoted Event Boosts across City Feed', included: true },
        { name: 'Dedicated Community Growth Manager', included: true }
      ]
    }
  ],
  Company: [
    {
      name: 'Starter',
      monthlyPrice: 2999,
      description: 'For startups looking to hire verified intern & junior talent.',
      features: [
        { name: 'Verified Employer Badge', included: true },
        { name: 'Post up to 5 Jobs / Month', included: true },
        { name: 'Host 2 Virtual Challenges / Year', included: true },
        { name: 'Basic Applicant Tracking', included: true },
        { name: 'People Discovery Talent Search', included: false }
      ]
    },
    {
      name: 'Growth',
      monthlyPrice: 5499,
      popular: true,
      description: 'For scaling companies building strong campus and community presence.',
      features: [
        { name: 'Verified Employer Badge', included: true },
        { name: 'Unlimited Job & Internship Postings', included: true },
        { name: 'People Discovery: Filter by Hackathon Wins & Verified Stats', included: true },
        { name: 'Direct Candidate InMail / Outreach', included: true },
        { name: 'Host Branded Hackathons & Hiring Sprints', included: true },
        { name: 'Applicant Analytics & Export', included: true }
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: 8999,
      description: 'For enterprise recruiters targeting nationwide campus hiring.',
      features: [
        { name: 'All Growth Features Included', included: true },
        { name: 'Multi-College Coordinated Campus Drives', included: true },
        { name: 'Sponsored Job Placements at Top of Feed', included: true },
        { name: 'Custom Pre-Assessment Integration', included: true },
        { name: 'Dedicated University Relations Strategist', included: true }
      ]
    }
  ],
  'Sports Organizer': [
    {
      name: 'Starter',
      monthlyPrice: 999,
      description: 'For local turf leagues and box cricket weekend cups.',
      features: [
        { name: 'Verified Sports Organizer Badge', included: true },
        { name: 'Up to 10 Tournaments / Year', included: true },
        { name: 'Live Ball-by-Ball Score Entry Tool', included: true },
        { name: 'Basic Player Stat Tracking', included: true },
        { name: 'Live Video Streaming', included: false }
      ]
    },
    {
      name: 'Growth',
      monthlyPrice: 2499,
      popular: true,
      description: 'For active district leagues, football academies, and martial arts.',
      features: [
        { name: 'Verified Sports Organizer Badge', included: true },
        { name: 'Unlimited Tournaments & Matches', included: true },
        { name: 'Live Stream Integration with Viewer Chat', included: true },
        { name: 'Automatic Player Career Ledger Updates', included: true },
        { name: 'WhatsApp Match Schedule & Score Alerts', included: true },
        { name: 'Full Tournament Leaderboard & Brackets', included: true }
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: 4999,
      description: 'For state-level sports federations and commercial sports promoters.',
      features: [
        { name: 'All Growth Features Included', included: true },
        { name: 'Promoted Tournament Listings', included: true },
        { name: 'Player Scouting Reports & High-Res Match Archives', included: true },
        { name: 'Priority Feed Ranking for Live Matches', included: true },
        { name: 'Sponsorship Branding on Live Streams', included: true }
      ]
    }
  ]
};
