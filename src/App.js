import React, { useState } from 'react';
import Header from './components/header';
import GreetingForm from './components/greetingForm';
import GreetingList from './components/greetingList';

function App() {
  const [greetings, setGreetings] = useState([]);

  const addGreeting = (newGreeting) => {
    setGreetings([...greetings, newGreeting]);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <GreetingForm addGreeting={addGreeting} />
      <GreetingList greetings={greetings} />
    </div>
  );
}

export default App;
