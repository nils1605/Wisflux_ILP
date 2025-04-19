import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/visit`)
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => console.error('Failed to fetch visitor count:', err));
  }, []);

  return (
    <div className="App">
      <h1>👋 Welcome to Our Site!</h1>
      <p>You've helped us reach:</p>
      <h2>{count !== null ? `${count} visits` : 'Loading...'}</h2>
    </div>
  );
}

export default App;
