
import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Welcome to Piñata Bust</h1>
      import React, { useEffect, useState } from 'react';

function App() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch("https://pi-ata-busy-backend.onrender.com/leaderboard")
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(err => console.error("Failed to fetch leaderboard:", err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Welcome to Piñata Bust</h1>
      <h3>Leaderboard:</h3>
      <ul>
        {leaderboard.map((entry, i) => (
          <li key={i}>{entry.name}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
    </div>
  );
}

export default App;
