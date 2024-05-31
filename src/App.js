import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Inquiry from './pages/inquiry';
import PhotoGallery from './pages/gallery';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inquiry">Inquiry</Link></li>
            <li><Link to="/photo-gallery">Photo Gallery</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
