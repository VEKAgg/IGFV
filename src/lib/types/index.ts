export type DataState = 'live' | 'placeholder' | 'coming-soon';

export interface DataStateContainer<T> {
	data: T;
	state: DataState;
	sourceStatus?: string;
	error?: string;
}

export interface SquadronStats {
	membersCount: string;
	systemsExplored: string;
	totalCredits: string;
	factionStatus: string;
}

export interface FleetCarrierData {
	name: string;
	id: string;
	location: string;
	activeServices: string[];
	jumpSchedule: string;
	logisticsRole: string;
	operationalNotes: string;
	updatedAt: string;
}

export interface Operation {
	id: string;
	title: string;
	category: string;
	priority: 'Low' | 'Medium' | 'High' | 'Urgent';
	summary: string;
	lead: string;
	eta: string;
	participation: string;
	progress: number; // 0 to 100
	status: 'active' | 'upcoming' | 'completed';
}

export interface NewsPost {
	slug: string;
	title: string;
	excerpt: string;
	category: string;
	publishedAt: string;
	coverImage?: string;
	content: string;
	dataState?: DataState;
}

export interface GuideEntry {
	slug: string;
	title: string;
	category: string;
	publishedAt: string;
	excerpt: string;
	content: string;
	steps?: Array<{ title: string; text: string }>;
	dataState?: DataState;
}

export interface MemberProfile {
	name: string;
	role: 'Leader' | 'Manager' | 'Specialist' | 'Commander' | 'Recruiter' | 'Officer';
	rank: string;
	avatarUrl?: string;
	platform: 'PC' | 'Xbox' | 'PlayStation' | 'Cross-platform';
	timezone: string;
	joinDate: string;
	bio: string;
	isFeatured?: boolean;
}

export interface EventItem {
	id: string;
	title: string;
	eventType: string;
	date: string;
	description: string;
	difficulty: 'Beginner Friendly' | 'Intermediate' | 'Advanced' | 'Expert';
	duration: string;
	participationRoute: string;
	status: 'upcoming' | 'past' | 'weekly';
}

export interface GalleryItem {
	id: string;
	title: string;
	caption: string;
	category: 'operations' | 'exploration' | 'carrier' | 'milestones' | 'community';
	imageUrl: string;
	credit: string;
}

export interface FAQItem {
	question: string;
	answer: string;
	category: string;
}

export interface TestimonialItem {
	commanderName: string;
	quote: string;
	role: string;
}
