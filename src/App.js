import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignupModal from './components/SignupModal';
import LoginModal from './components/LoginModal';
import PasswordSetup from './components/PasswordSetup';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupModal />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/passwordSetup" element={<PasswordSetup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
