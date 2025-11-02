'use client';

export default function JoinPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow">
          <h1 className="text-3xl font-bold text-white mb-4">Join IGFV</h1>
          <p className="text-gray-300 mb-6">We welcome pilots on PC and supported platforms. Minimum activity expectation: occasional participation in ops and active Discord presence. Our mentorship program pairs new pilots with veterans.</p>

          <div className="bg-dark/40 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Apply</h2>
            <p className="text-gray-300 mb-4">The fastest path is via Discord — click Join and follow instructions in #apply.</p>
            <a href="https://discord.gg/igfv" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-norway-red text-norway-white rounded-md">Join Discord & Apply</a>
          </div>

          <div className="bg-dark/40 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-3">Onboarding Steps</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Create or update your Inara profile.</li>
              <li>Introduce yourself in #welcome with playtimes and preferred roles.</li>
              <li>Schedule a mentoring session if you want hands-on guidance.</li>
              <li>Read the Community Rules and Squadron Code of Conduct.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
