import React, { useState } from 'react';

function GreetingForm({ addGreeting }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGreeting(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your greeting message"
        className="p-2 border rounded mr-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send Greeting
      </button>
    </form>
  );
}

export default GreetingForm;
