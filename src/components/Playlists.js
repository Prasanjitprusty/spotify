import React from 'react';

const Playlists = () => {
  // Mock data for playlists
  const playlists = [
    { id: 1, name: 'Top 50 Global', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Peaceful Piano', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'All Out 90s', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="section playlists my-6">
      <h3 className="text-xl font-semibold mb-4">Featured Playlists</h3>
      <div className="playlists-container flex gap-6 overflow-x-auto">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-card flex-shrink-0 w-40">
            <img src={playlist.image} alt={playlist.name} className="rounded-lg w-full h-40 object-cover mb-2" />
            <p className="text-center">{playlist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;