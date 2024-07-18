import React from 'react';

function GreetingList({ greetings }) {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Received Greetings:</h2>
      <ul>
        {greetings.map((greeting, index) => (
          <li key={index} className="mb-2">
            {greeting}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GreetingList;
