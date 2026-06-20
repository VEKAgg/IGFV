import type { FleetCarrierData } from '$lib/types';

export const fleetCarrierPlaceholder: FleetCarrierData = {
	name: 'ISS Valhall',
	id: 'VXX-RHJ',
	location: 'LHS 3447',
	activeServices: [
		'Refuel',
		'Repair',
		'Rearm',
		'Outfitting',
		'Shipyard',
		'Commodities Market',
		'Universal Cartographics',
		'Pioneer Supplies'
	],
	jumpSchedule: 'Weekly Thursday maintenance jumps. Departs LHS 3447 at 20:00 UTC.',
	logisticsRole: 'Deep Space Operations Base & Community Commodity Trading Hub.',
	operationalNotes: 'Currently stationed in orbit around LHS 3447 A 3. Docking is open to all clean commanders. Market is trading Gold and Tritium.',
	updatedAt: new Date().toISOString()
};

export const carrierEtiquette = [
	{
		title: 'Docking Access',
		description: 'Docking is normally set to "All" to assist fellow commanders. During active operations, docking may be restricted to squadron members or friends only. Always check status badges.'
	},
	{
		title: 'Tritium Donations',
		description: 'Operating a fleet carrier requires Tritium fuel. If you benefit from our trade loops or expeditions, donations of Tritium to the carrier cargo hold are highly appreciated but never mandatory.'
	},
	{
		title: 'Expedition Parking',
		description: 'During scheduled deep-space trips, please ensure your ships are docked at least 30 minutes before the scheduled jump time. Carrier jumps cannot wait for late pilots.'
	},
	{
		title: 'No Illegal Cargo Offloading',
		description: 'Commanders are requested not to dump black market goods on the carrier unless a specific black market operation is currently active. Clean operations are our standard.'
	}
];

export const carrierServicesDetail = [
	{
		name: 'Refuel & Repair & Rearm',
		status: 'Active',
		cost: '0% Tariff',
		description: 'Fully stock your weapons, repair structural damage, and top up fuel tanks after long flights.'
	},
	{
		name: 'Shipyard & Outfitting',
		status: 'Active',
		cost: '0% Tariff',
		description: 'Transfer, store, and switch your ships and engineered modules directly on the carrier.'
	},
	{
		name: 'Commodities Market',
		status: 'Active',
		cost: 'Varies',
		description: 'Sell mined resources or buy/sell operational commodities at highly competitive rates.'
	},
	{
		name: 'Universal Cartographics',
		status: 'Active',
		cost: '25% Tax (standard)',
		description: 'Turn in exploration data safely while thousands of light-years away from the Bubble.'
	}
];

export const carrierJumpHistory = [
	{
		date: '3311-06-18',
		origin: 'Sol',
		destination: 'LHS 3447',
		purpose: 'Relocation for trading loop support',
		tritiumUsed: '120 tonnes'
	},
	{
		date: '3311-06-11',
		origin: 'Colonia',
		destination: 'Sol',
		purpose: 'Return from Colonia exploration run',
		tritiumUsed: '4,500 tonnes'
	},
	{
		date: '3311-05-28',
		origin: 'LHS 3447',
		destination: 'Colonia',
		purpose: 'Annual squadron deep-space expedition',
		tritiumUsed: '4,620 tonnes'
	}
];
