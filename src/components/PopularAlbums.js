import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        'https://spotify23.p.rapidapi.com/artist_albums/',
        {
          params: {
            id: '2w9zwq3AktTeYYMuhMjju8', // Replace with the artist ID you want to fetch albums for
            offset: '0',
            limit: '10',
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          },
        }
      );
      console.log('API Response for albums:', response.data);
      setAlbums(response.data.items || []);
    } catch (error) {
      console.error('Error fetching albums:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="section popular-albums my-6">
      <h3 className="text-xl font-semibold mb-4">Popular Albums</h3>
      <div className="albums-container flex gap-6 overflow-x-auto">
        {loading ? (
          <p>Loading albums...</p>
        ) : albums.length > 0 ? (
          albums.map((album) => (
            <div key={album.id} className="album-card flex-shrink-0 w-40">
              <img
                src={album.images && album.images.length > 0 ? album.images[0].url : 'https://via.placeholder.com/150'}
                alt={album.name}
                className="rounded-lg w-full h-40 object-cover mb-2"
              />
              <p className="text-center">{album.name}</p>
            </div>
          ))
        ) : (
          <p>No albums found.</p>
        )}
      </div>
    </div>
  );
};

export default PopularAlbums;
