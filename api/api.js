const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
const users = [
  { id: 1, name: 'Roßes' },
  { id: 2, name: 'Leines' },
  { id: 3, name: 'Bychen' }
];

const menu = [
  { id: 1, item: 'Pizza', price: 10 },
  { id: 2, item: 'Burger', price: 8 },
  { id: 3, item: 'Salad', price: 6 }
];

const list = [
  { id: 1, name: 'Item 1', notes: 'Schallo', status: 'open' },
  { id: 2, name: 'Item 2', notes: 'Schallo', status: 'open' },
  { id: 3, name: 'Item 3', notes: 'Schallo', status: 'open' }
];

// Routes
app.get('/users', async (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.get('/menu', async (req, res) => {
  try {
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching menu' });
  }
});

app.get('/list', async (req, res) => {
  try {
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching list' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});