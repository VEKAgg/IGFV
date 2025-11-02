'use client';

export default function AboutPage(){
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow">
          <h1 className="text-3xl font-bold text-white mb-4">About Interstellar Goodfellas (IGFV)</h1>
          <p className="text-gray-300 mb-4">Founded in 2019, IGFV is focused on community, colonization, and a friendly onboarding experience for new commanders. We operate the fleet carrier Goodfellas Valhall (callsign IGFV) and prioritize exploration, peaceful expansion, and cooperative Background Simulation (BGS) efforts.</p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-2">Leadership</h2>
          <ul className="text-gray-300 mb-4 list-disc list-inside">
            <li>Vice Admiral — CMDR Don Samen</li>
            <li>Rear Admiral — CMDR Twisted VorteK</li>
            <li>Veterans & Officers — Various senior pilots</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-2">Fleet Carrier: Goodfellas Valhall</h2>
          <p className="text-gray-300 mb-4">Carrier Name: Goodfellas Valhall (IGFV) — central logistics hub for supplies, outfitting, and staging operations. Carrier jump schedule is posted in Discord carrier-schedule channel.</p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-2">Playstyle & Activity</h2>
          <p className="text-gray-300 mb-4">Focus areas: exploration, colonization, trade, and controlled BGS play. We maintain timezone activity windows to facilitate ops across many regions.</p>
        </div>
      </div>
    </div>
  );
}
