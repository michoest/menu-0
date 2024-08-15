const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
const db = require('./db');

app.get('/menu', async (req, res) => {
  try {
    res.json(db.menu);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu' });
  }
});

app.get('/list', async (req, res) => {
  try {
    res.json(db.list);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching list' });
  }
});

app.post('/list/item/:id/complete', async (req, res, next) => {
    const item = db.list.find(item => item.id == req.params.id);

    item.status = 'completed';
    
    return res.json(db.list);
});

app.post('/list/item/:id/open', async (req, res, next) => {
    const item = db.list.find(item => item.id == req.params.id);

    item.status = 'open';
    
    return res.json(db.list);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});