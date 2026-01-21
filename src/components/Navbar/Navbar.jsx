import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import amemcoWhiteLogo from "../../assets/amemcowhite.svg";
import amemcoGrayLogo from "../../assets/amemcogray.svg";
import CaretDown from "../../assets/CaretDown.png";
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img
              src={isScrolled ? amemcoWhiteLogo : amemcoGrayLogo}
              alt="AMEMCO"
              className="navbar-logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="navbar-nav">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            </li>

            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="navbar-dropdown">
              <span className={`dropdown-trigger ${isActive('/services') ? 'active' : ''}`}>
                Services
                <img src={CaretDown} alt="" className="dropdown-caret" />
              </span>

              <div className="dropdown-menu-wrapper">
                <ul className="dropdown-menu">
                  <li><Link to="/services/mechanical">Mechanical (HVAC)</Link></li>
                  <li><Link to="/services/electrical">Electrical Engineering</Link></li>
                  <li><Link to="/services/plumbing">Plumbing & Drainage</Link></li>
                  <li><Link to="/services/fire-fighting">Fire Fighting & Fire Alarm</Link></li>
                  <li><Link to="/services/low-current">Low-Current (ELV)</Link></li>
                  <li><Link to="/services/amc">AMC & Facility Maintenance</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link>
            </li>
            
            <li>
              <Link to="/careers" className={isActive('/careers') ? 'active' : ''}>Careers</Link>
            </li>

            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''}>
          Home
        </Link>

        <Link to="/about" className={isActive('/about') ? 'active' : ''}>
          About Us
        </Link>

        {/* SERVICES (mobile = collapsible accordion) */}
        <div className="mobile-services-group">
          <button 
            className={`mobile-services-title ${isActive('/services') ? 'active' : ''}`}
            onClick={toggleMobileServices}
          >
            Services
            <img 
              src={CaretDown} 
              alt="" 
              className={`mobile-caret ${isMobileServicesOpen ? 'open' : ''}`} 
            />
          </button>

          <div className={`mobile-services-links ${isMobileServicesOpen ? 'open' : ''}`}>
            <Link to="/services/mechanical">Mechanical (HVAC)</Link>
            <Link to="/services/electrical">Electrical Engineering</Link>
            <Link to="/services/plumbing">Plumbing & Drainage</Link>
            <Link to="/services/fire-fighting">Fire Fighting & Fire Alarm</Link>
            <Link to="/services/low-current">Low-Current (ELV)</Link>
            <Link to="/services/amc">AMC & Facility Maintenance</Link>
          </div>
        </div>

        <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>
          Projects
        </Link>

        <Link to="/careers" className={isActive('/careers') ? 'active' : ''}>
          Careers
        </Link>
        <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;