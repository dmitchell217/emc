// Footer.tsx
import React from 'react';
import ContactForm from './ContactForm';
import SocialMediaLinks from './SocialMediaLinks';
import LegalInformation from './LegalInformation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        <div>
          <ContactForm />
        </div>
        <div>
          <SocialMediaLinks />
        </div>
        <div>
          <LegalInformation />
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        <p>© 2023 EMC Properties. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
