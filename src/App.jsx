import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Styles
import './App.css';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetail';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar - appears on all pages */}
        <Navbar />
        
        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} /> 
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;