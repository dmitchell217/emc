import React, { useState, ChangeEvent, FormEvent } from "react";

function InquiryForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Add logic to send the form values (name, email, message) to your database here

    console.log(name, email, message); // Just for testing

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mt-4 p-4 border-t border-gray-200">
      <h2 className="text-xl font-bold">Inquiry Request</h2>
      <form className="mt-4" onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label className="block mb-2 text-sm font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-2 mb-4 border rounded"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label className="block mb-2 text-sm font-bold" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          id="message"
          value={message}
          onChange={handleMessageChange}
        />

        <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default InquiryForm;
