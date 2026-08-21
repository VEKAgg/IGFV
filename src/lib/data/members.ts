import type { MemberProfile } from '$lib/types';

export const members: MemberProfile[] = [
	{
		name: 'Don Samen',
		role: 'Leader',
		rank: 'Elite Explorer',
		avatarUrl: '',
		platform: 'PC',
		timezone: 'UTC+1',
		joinDate: '2019-06-15',
		bio: 'Founder and overall commander of IGFV. Passionate about exploration, carrier operations, and maintaining a welcoming, friendly, low-stress squadron community.',
		isFeatured: true,
		categories: ['Leadership', 'Logistics', 'Mentors'],
		inaraUrl: 'https://inara.cz/elite/cmdr/212039/'
	},
	{
		name: 'Twisted VorteK',
		role: 'Manager',
		rank: 'Elite Combat V',
		avatarUrl: '',
		platform: 'PC',
		timezone: 'UTC-5',
		joinDate: '2020-03-11',
		bio: 'Active wing coordinator and operations manager. Specializes in combat tactics, engineering, and helping new pilots build up their combat capabilities.',
		isFeatured: true,
		categories: ['Leadership', 'Combat Pilots', 'Mentors', 'Specialists'],
		inaraUrl: 'https://inara.cz/elite/cmdr/256401/'
	},
	{
		name: 'Sarah Thorne',
		role: 'Officer',
		rank: 'Elite Explorer III',
		avatarUrl: '',
		platform: 'PC',
		timezone: 'UTC',
		joinDate: '2021-01-20',
		bio: 'Lead organizer of squadron exploration expeditions. Has spent months in the black mapping systems and coordinates our deep-space cartography.',
		isFeatured: false,
		categories: ['Leadership', 'Explorers', 'Mentors'],
		inaraUrl: 'https://inara.cz/elite/cmdr/301285/'
	},
	{
		name: 'Marcus Vance',
		role: 'Recruiter',
		rank: 'Elite Trader',
		avatarUrl: '',
		platform: 'Cross-platform',
		timezone: 'UTC+2',
		joinDate: '2022-09-05',
		bio: 'Responsible for greeting new pilots on Discord and guiding them through the initial onboarding. Enjoys trade loops, mining, and fleet carrier trading.',
		isFeatured: false,
		categories: ['Recruiters', 'Traders'],
		inaraUrl: 'https://inara.cz/elite/cmdr/358942/'
	},
	{
		name: 'Jin-Woo',
		role: 'Specialist',
		rank: 'Elite Trader III',
		avatarUrl: '',
		platform: 'PC',
		timezone: 'UTC+9',
		joinDate: '2021-11-15',
		bio: 'A master of logistics. Directs fleet carrier commodity trading loops, monitors market demands, and optimizes squadron trade routes.',
		isFeatured: false,
		categories: ['Logistics', 'Specialists', 'Traders'],
		inaraUrl: 'https://inara.cz/elite/cmdr/289713/'
	}
];
export const leadership = members.filter(
	(m) => m.role === 'Leader' || m.role === 'Manager' || m.role === 'Officer'
);
export const featuredMembers = members.filter((m) => m.isFeatured);
export const standardMembersPlaceholder: MemberProfile[] = [
	{
		name: 'CMDR Aethelgard',
		role: 'Commander',
		rank: 'Dangerous',
		platform: 'PC',
		timezone: 'UTC+1',
		joinDate: '',
		bio: 'Active combat wing pilot participating in LHS 3447 authority security runs.',
		categories: ['Combat Pilots']
	},
	{
		name: 'CMDR Nova_Storm',
		role: 'Commander',
		rank: 'Ranger',
		platform: 'Xbox',
		timezone: 'UTC-6',
		joinDate: '',
		bio: 'Deep space mapper currently stationed aboard the ISS Valhall hangar bay.',
		categories: ['Explorers']
	},
	{
		name: 'CMDR Polaris_Cap',
		role: 'Commander',
		rank: 'Broker',
		platform: 'PlayStation',
		timezone: 'UTC',
		joinDate: '',
		bio: 'Trade fleet pilot assisting with Tritium restocking trade loops.',
		categories: ['Traders']
	},
	{
		name: 'CMDR VoidWalker',
		role: 'Commander',
		rank: 'Elite Explorer',
		platform: 'PC',
		timezone: 'UTC+3',
		joinDate: '',
		bio: 'Charting pristine rings and planetary surfaces beyond the bubble.',
		categories: ['Explorers']
	}
];
