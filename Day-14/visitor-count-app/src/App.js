import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate API call to get visitor count
    const visitCount = Math.floor(Math.random() * 1000) + 1;
    setTimeout(() => setCount(visitCount), 500);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Visitor Counter App!</h1>
      <h2>Visitor Count: {count}</h2>
    </div>
  );
}

export default App;
