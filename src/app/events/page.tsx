'use client';

export default function EventsPage(){
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow">
          <h1 className="text-3xl font-bold text-white mb-4">Events & Operations</h1>
          <p className="text-gray-300 mb-6">Upcoming operation calendar, carrier jump schedule, BGS targets and after-action reports will appear here.</p>

          <div className="bg-dark/40 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-2">Next Event</h3>
            <p className="text-gray-300">Fleet Carrier relocation to support colonization — schedule posted in Discord.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
