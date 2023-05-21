// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import InquiryForm from './pages/InquiryForm';
import PropertyDetails from './pages/PropertyDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/inquiry" element={<InquiryForm />} />
        <Route path="/property-details" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
