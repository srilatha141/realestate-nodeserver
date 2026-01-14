// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    fs.readFile('./pageContent.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }
    res.json(JSON.parse(data));
  });
});

app.post('/update-json', (req, res) => {
    fs.writeFileSync(
        './pageContent.json',
        JSON.stringify(req.body, null, 2)
    );
    res.json({ success: true });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
