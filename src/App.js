import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Inquiry from './pages/inquiry';
import PhotoGallery from './pages/gallery';
import './styles/App.css';
import logo from './assets/logo.jpeg'; // Correct the import path

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setCurrentPage('Home');
    } else if (path === '/about') {
      setCurrentPage('About');
    } else if (path === '/inquiry') {
      setCurrentPage('Inquiry');
    } else if (path === '/gallery') {
      setCurrentPage('Photo Gallery');
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav-content">
          <img src={logo} alt="Logo" className="logo" />
          <div className="current-page" onClick={toggleMobileMenu}>
            {currentPage} <span className="arrow">&#9662;</span>
          </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/inquiry" onClick={() => setIsMobileMenuOpen(false)}>Inquiry</Link></li>
            <li><Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Photo Gallery</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
