import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ic_spotify from '../assets/ic_spotify.png';

const PasswordSetup = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordSetup = () => {
    if (password.length >= 10 && /[a-zA-Z]/.test(password) && /[0-9!@#$%^&*]/.test(password)) {
      localStorage.setItem('userPassword', password);
      alert('Password setup complete!');
      navigate('/create-password');
    } else {
      alert('Please enter a valid password that meets all requirements.');
    }
  };

  return (
    <div className="bg-gray-950 fixed inset-0 bg-opacity-70 flex items-center justify-center z-50">
      <div className="text-white p-6 rounded-lg w-full max-w-md relative">
        <div className="text-center mb-4">
          <img
            src={ic_spotify}
            alt="Spotify Logo - Step 1 of Password Setup."
            className="mx-auto w-12 mb-2"
          />
          <h2 className="text-2xl font-bold">Step 1 of 3</h2>
          <p className="text-xl">Create a password</p>
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
            placeholder="Enter your password"
            className="w-full p-2 rounded-md bg-gray-700 text-white"
          />
          <ul className="text-sm mt-2 list-disc list-inside">
            <li>1 letter</li>
            <li>1 number or special character (example: # ? ! &)</li>
            <li>10 characters</li>
          </ul>
        </div>
        <button
          onClick={handlePasswordSetup}
          className="bg-green-600 w-full p-2 rounded-md text-white mb-4 hover:bg-green-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PasswordSetup;
