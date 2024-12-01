import React from 'react';
import { FaPlus, FaPodcast, FaGlobe } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-1/4 bg-gray-900 text-gray-200 h-screen p-6 flex flex-col justify-between border-r border-gray-700">
      {/* Top Section */}
      <div>
        {/* Library Header */}
        <h2 className="text-lg font-bold mb-6">Your Library</h2>

        {/* Create Playlist Section */}
        <div className="mb-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-400 mb-3">Create your first playlist</p>
          <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            Create Playlist
          </button>
        </div>

        {/* Browse Podcasts Section */}
        <div className="p-4 bg-gray-800 rounded-lg">
          <p className="text-sm text-gray-400 mb-3">Let’s find some podcasts to follow</p>
          <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition">
            Browse Podcasts
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <ul className="text-sm text-gray-400 space-y-2 mb-6">
          <li className="hover:text-white cursor-pointer">Legal</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">Cookies</li>
          <li className="hover:text-white cursor-pointer">About Ads</li>
          <li className="hover:text-white cursor-pointer">Accessibility</li>
        </ul>
        <button className="w-full flex items-center justify-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition border border-gray-600">
          <FaGlobe className="mr-2 text-gray-400" />
          English
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
