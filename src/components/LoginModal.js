
// LoginModal Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ic_spotify from '../assets/ic_spotify.png';
import ic_google from '../assets/ic_google.png';
import ic_facebook from '../assets/ic_facebook.png';
import ic_apple from '../assets/ic_apple.png';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('userEmail');
    if (email === storedEmail && password) {
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="bg-gray-950 fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className=" text-white p-6 rounded-lg w-full max-w-md relative">
        <div className="text-center mb-4">
          <img
            src={ic_spotify}
            alt="Spotify Logo"
            className="mx-auto w-12 mb-2"
          />
          <h2 className="text-2xl font-bold">Log in to Spotify</h2>
        </div>
        <button className="bg-white text-black w-full flex items-center justify-center p-2 rounded-md mb-4 gap-2">
          <img src={ic_google} alt="Google Icon" className="w-5" />
          Continue with Google
        </button>
        <button className="bg-blue-600 text-white w-full flex items-center justify-center p-2 rounded-md mb-4 gap-2">
          <img src={ic_facebook} alt="Facebook Icon" className="w-5" />
          Continue with Facebook
        </button>
        <button className="bg-gray-800 text-white w-full flex items-center justify-center p-2 rounded-md mb-4 gap-2">
          <img src={ic_apple} alt="Apple Icon" className="w-5" />
          Continue with Apple
        </button>
        <button className="bg-gray-600 text-white w-full p-2 rounded-md mb-4 hover:bg-gray-700 transition">
          Continue with phone number
        </button>
        <div className="text-center mb-4">
          <span className="text-sm">──────── or ────────</span>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="email">
            Email or username
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or username"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-green-600 w-full p-2 rounded-md text-white mb-4 hover:bg-green-700 transition"
        >
          Log in
        </button>
        <p className="text-center text-sm mt-4">
          Forgot your password?{' '}
          <button className="text-blue-400 underline">Reset it here</button>
        </p>
        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <button className="text-blue-400 underline" onClick={() => navigate('/signup')}>
            Sign up for Spotify
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
