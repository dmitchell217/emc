import React from 'react';
import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';
import LegalInformation from './LegalInformation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <ContactForm />
          <SocialMediaLinks />
        </div>
        <LegalInformation />
      </div>
    </footer>
  );
};

export default Footer;
