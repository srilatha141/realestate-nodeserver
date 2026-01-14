// server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Node server running');
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
