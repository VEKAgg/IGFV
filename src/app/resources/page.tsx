'use client';

export default function ResourcesPage(){
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow">
          <h1 className="text-3xl font-bold text-white mb-4">Resources</h1>
          <p className="text-gray-300 mb-6">Build guides, ship loadouts, bookmarking POIs, engineering tips, trade routes, and Thargoid information will be collected here.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark/40 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Ship Builds</h3>
              <p className="text-gray-300 text-sm">Starter progression: Cobra Mk3 → Python → Anaconda. Click for example builds.</p>
            </div>
            <div className="bg-dark/40 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Engineering & Materials</h3>
              <p className="text-gray-300 text-sm">Guides on useful engineering modifications and where to farm materials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
