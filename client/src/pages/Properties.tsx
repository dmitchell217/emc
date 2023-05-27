
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyHeader from '../components/PropertyHeader';
import PropertyDescription from '../components/PropertyDescription';
import PhotoGallery from '../components/PhotoGallery';
import InquiryForm from "../components/InquiryForm";

const Properties: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Properties</h1>
      <p>This is a placeholder for the Properties page.</p>
      <PhotoGallery />
      <PropertyHeader />
      <PropertyDescription />
      <InquiryForm />
      {/* <AddOns />
      <PropertyDetails />
      <AccessAndHours />
      <FAQ />
      <Reviews />
      <ContactAndBooking /> */}
      <Footer />
    </div>
  );
};

export default Properties;
