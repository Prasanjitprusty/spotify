
// SignupModal Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ic_spotify from '../assets/ic_spotify.png';
import ic_google from '../assets/ic_google.png'; // Corrected the typo
import ic_facebook from '../assets/ic_facebook.png';
import ic_apple from '../assets/ic_apple.png';

const SignupModal = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Simple validation and storing email in local storage as authentication simulation
    if (email) {
      localStorage.setItem('userEmail', email);
      navigate('/passwordSetup');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="bg-gray-950 fixed inset-0 bg-opacity-70 flex items-center justify-center z-50">
      <div className="text-white p-6 rounded-lg w-full max-w-md relative">
        <div className="text-center mb-4">
          <img
            src={ic_spotify}
            alt="Spotify Logo"
            className="mx-auto w-12 mb-2"
          />
          <h2 className="text-2xl font-bold">Sign up to</h2>
          <p className="text-2xl font-bold">Start listening</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@domain.com"
            className="w-full p-2 rounded-md bg-gray-950 text-white"
          />
          <div className="flex items-center mt-2">
            <input type="checkbox" id="phoneInstead" className="mr-2" />
            <label htmlFor="phoneInstead" className="text-sm">
              Use phone number instead.
            </label>
          </div>
        </div>
        <button
          onClick={handleSignup}
          className="bg-green-600 w-full p-2 rounded-md text-white mb-4 hover:bg-green-700 transition"
        >
          Next
        </button>
        <div className="text-center mb-4">
          <span className="text-sm">──────── or ────────</span>
        </div>
        <div className="flex flex-col gap-4">
          <button className="bg-white text-black w-full flex items-center justify-center p-2 rounded-md gap-2">
            <img src={ic_google} alt="Google Icon" className="w-5" />
            Sign up with Google
          </button>
          <button className="bg-blue-600 text-white w-full flex items-center justify-center p-2 rounded-md gap-2">
            <img src={ic_facebook} alt="Facebook Icon" className="w-5" />
            Sign up with Facebook
          </button>
          <button className="bg-gray-800 text-white w-full flex items-center justify-center p-2 rounded-md gap-2">
            <img src={ic_apple} alt="Apple Icon" className="w-6 h-6" />
            Sign up with Apple
          </button>
        </div>
        <p className="text-center text-sm mt-4">
          Already have an account? <button className="text-blue-400 underline" onClick={() => navigate('/login')}>Log in here.</button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
