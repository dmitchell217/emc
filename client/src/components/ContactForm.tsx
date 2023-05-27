// ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div>
      <h2 className="text-white text-2xl mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border border-gray-300 rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
