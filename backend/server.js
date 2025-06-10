
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let leaderboard = [];

app.get('/', (req, res) => {
  res.send('Piñata Bust backend is running.');
});

app.post('/submit-score', (req, res) => {
  const { name, score } = req.body;
  if (name && score !== undefined) {
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    res.status(200).send({ message: 'Score submitted.' });
  } else {
    res.status(400).send({ message: 'Invalid submission.' });
  }
});

app.get('/leaderboard', (req, res) => {
  res.send(leaderboard);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
