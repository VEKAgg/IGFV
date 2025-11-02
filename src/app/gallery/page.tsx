'use client';

export default function GalleryPage(){
  const thumbs = Array.from({length:6}).map((_,i)=>`/gallery/thumb-${i+1}.jpg`);
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-8 shadow-glow">
          <h1 className="text-3xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-gray-300 mb-6">Screenshot gallery and event photos submitted by members.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {thumbs.map((t, idx) => (
              <div key={idx} className="bg-dark/40 rounded-lg overflow-hidden h-48 flex items-center justify-center text-gray-500">Image {idx+1}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
