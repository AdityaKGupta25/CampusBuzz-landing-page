export type InstitutionType = 'College' | 'School' | 'Community' | 'Company' | 'Sports Organizer';

export interface FeedEventCard {
  id: string;
  type: 'event';
  title: string;
  institutionName: string;
  institutionType: InstitutionType;
  verified: boolean;
  category: 'Technical' | 'Cultural' | 'Sports' | 'Workshop' | 'Market';
  mode: 'Offline' | 'Online' | 'Hybrid';
  date: string;
  venue: string;
  city: string;
  prizePool?: string;
  spotsTotal: number;
  spotsRemaining: number;
  bannerUrl: string;
  registrationDeadline: string;
  description: string;
  tags: string[];
}

export interface FeedJobCard {
  id: string;
  type: 'job';
  companyName: string;
  companyLogo: string;
  verified: boolean;
  roleTitle: string;
  roleType: 'Full-time' | 'Internship' | 'Contract' | 'Remote';
  location: string;
  salaryRange: string;
  eligibility: string;
  deadline: string;
  skillsRequired: string[];
  description: string;
  applicantsCount: number;
}

export interface FeedLiveSportsCard {
  id: string;
  type: 'live_sports';
  sport: 'Cricket' | 'Football' | 'Basketball' | 'Esports' | 'Athletics';
  tournamentName: string;
  organizerName: string;
  institutionType: InstitutionType;
  verified: boolean;
  teamA: { name: string; score: string; oversOrTime?: string; logo?: string };
  teamB: { name: string; score: string; oversOrTime?: string; logo?: string };
  statusNote: string;
  viewersCount: number;
  matchStage: string;
  liveStreamAvailable: boolean;
  venue: string;
}

export interface FeedUpdateCard {
  id: string;
  type: 'update';
  institutionName: string;
  institutionType: InstitutionType;
  verified: boolean;
  postedTimeAgo: string;
  content: string;
  imageUrl?: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  badgeTag: string;
}

export type FeedItem = FeedEventCard | FeedJobCard | FeedLiveSportsCard | FeedUpdateCard;

export interface CampusInsiderNotice {
  id: string;
  category: 'Placement' | 'Club' | 'Sports' | 'Notice' | 'Community' | 'Drive';
  title: string;
  author: string;
  authorRole: string;
  department: string;
  date: string;
  urgent: boolean;
  content: string;
  attachmentName?: string;
  badgeTag?: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  avatar: string;
  headline: string;
  institution: string;
  institutionType: 'College' | 'School' | 'Community';
  verifiedBadge: string;
  city: string;
  skills: string[];
  hackathonWins: number;
  techEventsAttended: number;
  sportsCaptain: boolean;
  openTo: string[];
}

export interface PricingPlan {
  name: 'Starter' | 'Growth' | 'Pro';
  monthlyPrice: number;
  popular?: boolean;
  description: string;
  features: { name: string; included: boolean }[];
}

export interface StakeholderPersona {
  id: InstitutionType;
  title: string;
  tagline: string;
  pricingTag: string;
  badgeColor: string;
  description: string;
  keyBenefits: string[];
  quote: { text: string; author: string; role: string };
}
