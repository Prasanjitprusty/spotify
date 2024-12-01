import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PopularArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true); // Track the loading state

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        console.log('Attempting to fetch artists...');
        const options = {
          method: 'GET',
          url: 'https://spotify23.p.rapidapi.com/artists/',
          params: {
            ids: '2w9zwq3AktTeYYMuhMjju8',
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          },
        };
        
        const response = await axios.request(options);
        console.log('API Response:', response.data); // Log the response to verify the structure

        // Check if the response has artists data
        if (response.data && response.data.artists && response.data.artists.length > 0) {
          setArtists(response.data.artists);
        } else {
          console.warn('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching artists:', error);
      } finally {
        setLoading(false); // Set loading to false whether the request succeeded or failed
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="section popular-artists my-6">
      <h3 className="text-xl font-semibold mb-4">Popular Artists</h3>
      <div className="artists-container flex gap-6 overflow-x-auto">
        {loading ? (
          <p>Loading artists...</p>
        ) : artists.length > 0 ? (
          artists.map((artist) => (
            <div key={artist.id} className="artist-card flex-shrink-0 w-40">
              <img
                src={artist.images && artist.images.length > 0 ? artist.images[0].url : 'https://via.placeholder.com/150'}
                alt={artist.name}
                className="rounded-lg w-full h-40 object-cover mb-2"
              />
              <p className="text-center">{artist.name}</p>
            </div>
          ))
        ) : (
          <p>No artists found.</p>
        )}
      </div>
    </div>
  );
};

export default PopularArtists;
