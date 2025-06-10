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
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.length === 0 && <li>No scores yet</li>}
        {leaderboard.map((entry, index) => (
          <li key={index}>{entry.name}: {entry.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
