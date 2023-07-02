import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Mock data for the FAQs and reviews
const faqs = [
  { question: 'What is the maximum number of attendees?', answer: 'The maximum number of attendees is 35.' },
  // Add more FAQs...
];

const reviews = [
  { name: 'Natasha M.', review: 'Great space! Staff was very helpful. I was provided with everything I needed. Would definitely use this space again and highly recommend to others looking for an affordable space in NYC!' },
  // Add more reviews...
];

const RoomPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission...
  };

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <Navbar />
      {/* 1. About */}
      <div className="bg-center flex items-center justify-between py-8 px-6 mb-8 bg-blue-500 text-white rounded-lg">
        <div>
          <h2 className="text-4xl font-bold">About</h2>
          <p className="mt-2">Cre8ive 2-2: Flexible Chelsea Space is a 323 sq/ft loft in New York, NY...</p>
        </div>
      </div>

      {/* 2. FAQs */}
      <div className="px-6 mb-8">
        <h2 className="text-4xl font-bold">FAQs</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="mt-4">
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* 3. Reviews */}
      <div className="px-6 mb-8">
        <h2 className="text-4xl font-bold">Reviews</h2>
        {reviews.map((review, i) => (
          <div key={i} className="mt-4">
            <h3 className="font-semibold">{review.name}</h3>
            <p>{review.review}</p>
          </div>
        ))}
      </div>

      {/* 4. Contact Us */}
      <div className="px-6 mb-8">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-lg text-gray-700 focus:outline-none" />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-lg text-gray-700I apologize for the cutoff. Here's the continuation of the code:

```tsx
            focus:outline-none" />
          </label>
          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleInputChange} className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-lg text-gray-700 focus:outline-none" />
          </label>
          <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RoomPage;
