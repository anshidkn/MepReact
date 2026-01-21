import React from 'react';

// Assets
import contactHeroBg from "../assets/pages_bg.jpg";
import silverShade from "../assets/silver_shade.png";
import sendUsImage from "../assets/send_us.jpg";

// Section Components
import ContactHeroSection from "../components/sections/contactsections/ContactHeroSection";
import ContactIntroSection from "../components/sections/contactsections/ContactIntroSection";
import WeHereToHelpSection from "../components/sections/contactsections/WeHereToHelpSection";
import SendUsMessageSection from "../components/sections/contactsections/SendUsMessageSection";

const ContactUs = () => {
  // Contact Information
  const contactInfo = {
    address: "Abu Hail, Dubai, UAE",
    phone: "+971 585939631",
    email: "info@almuqayilmep.com",
    website: "www.almuqayilmep.com"
  };

  // Map location coordinates (Dubai - Abu Hail area)
  const mapLocation = {
    lat: 25.2802,
    lng: 55.3438
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <ContactHeroSection 
        backgroundImage={contactHeroBg}
        title="CONTACT US"
      />

      {/* Intro Section */}
      <ContactIntroSection />

      {/* We're Here to Help Section */}
      <WeHereToHelpSection 
       backgroundImage={silverShade}
      />

      {/* Send Us a Message Section */}
      <SendUsMessageSection 
        image={sendUsImage}
      />
    </div>
  );
};

export default ContactUs;