'use client';

import Link from 'next/link';

export default function MembersPage() {
  const sampleMembers = [
    { name: 'CMDR Don Samen', rank: 'Vice Admiral', combat: 'Elite', trade: 'Tycoon', exploration: 'Pathfinder', tz: 'UTC+1' },
    { name: 'CMDR Twisted VorteK', rank: 'Rear Admiral', combat: 'Competent', trade: 'Broker', exploration: 'Surveyor', tz: 'UTC-5' },
    { name: 'CMDR Nova', rank: 'Veteran', combat: 'Expert', trade: 'Trader', exploration: 'Ranger', tz: 'UTC+0' },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow">
          <h1 className="text-3xl font-bold text-white mb-6">Members</h1>
          <p className="text-gray-300 mb-6">Public roster showing CMDR names, ranks, and a snapshot of activity. Use Discord to request more details.</p>

          <div className="bg-dark/40 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sampleMembers.map((m) => (
                <div key={m.name} className="p-4 bg-dark-lighter rounded-md">
                  <div className="font-semibold text-white">{m.name}</div>
                  <div className="text-gray-300 text-sm">{m.rank} • {m.tz}</div>
                  <div className="mt-2 text-gray-200 text-sm">
                    <div>Combat: {m.combat}</div>
                    <div>Trade: {m.trade}</div>
                    <div>Exploration: {m.exploration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/join" className="inline-block px-6 py-3 bg-norway-red text-norway-white rounded-md">Join Our Ranks</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
