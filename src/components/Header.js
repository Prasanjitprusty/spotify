import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingBag, FaHome } from 'react-icons/fa'; // Icons for Search, Bag, and Home
import spotifyLogo from '../assets/ic_spotify.png'; // Import Spotify logo image

const Header = () => {
  const navigate = useNavigate();

  const navToPage = (url) => {
    navigate(url);
  };

  return (
    <header className="flex items-center justify-between p-6 bg-black text-white">
      {/* App Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <img src={spotifyLogo} alt="Spotify Logo" className="w-8 h-8" />
        Spotify Clone
      </div>

      {/* Navigation and Search Bar */}
      <div className="flex items-center gap-4">
        {/* Home Icon */}
        <FaHome
          className="flextext-gray-400 text-2xl cursor-pointer hover:text-gray-200 transition-colors"
          title="Home"
          onClick={() => navToPage('/')}
        />

        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 rounded-md px-4 py-2 w-96">
          {/* Search Icon */}
          <FaSearch className="text-gray-400 mr-2" />
          {/* Search Input */}
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-white focus:outline-none w-full"
          />
          {/* Separator Line */}
          <div className="w-px h-6 bg-gray-600 mx-4"></div>
          {/* Shopping Bag Icon */}
          <FaShoppingBag
            className="text-gray-400 cursor-pointer hover:text-gray-200 transition-colors"
            title="Bag"
          />
        </div>

        {/* Signup and Login Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navToPage('/signup')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Signup
          </button>
          <button
            onClick={() => navToPage('/login')}
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
