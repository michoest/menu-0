const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample data
const db = {
    menu: [
        { id: 1, title: 'Waktoffels', standardAmount: 4, ingredients: [
          { name: 'Toffels', amount: { value: 1, unit: 'kg' } }, 
          { name: 'Wak', amount: { value: 250, unit: 'g' } }
          ] 
      },
        { id: 2, title: 'Sagne', standardAmount: 2, ingredients: [
          { name: 'Dels', amount: { value: 12, unit: 'Latten' } }, 
          { name: 'Sauce', amount: { value: null, unit: 'viel' } }
      ] }
      ],
      list: [
        { id: 1, category: 'We', name: 'Eis in Röße M', notes: '6 Tück', status: 'open', due: '2024-08-16' },
        { id: 2, category: 'We', name: 'Lopier', notes: '', status: 'open' },
        { id: 3, category: 'Markt', name: 'Toffels', notes: '2,5 kg', status: 'open' }
      ]
};

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