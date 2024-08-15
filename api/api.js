const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

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

app.post('/list/clear', async (req, res, next) => {
    db.list = [];
    
    return res.json(db.list);
});

app.post('/menu', async (req, res, next) => {
    const { ingredients } = req.body;

    // Build ingredient list
    const listIngredients = ingredients.reduce((acc, cur) => addIngredientToList(acc, cur), []);
    const menu = db.menu;
    const vendors = Object.fromEntries(menu.ingredients.map(ingredient => ([ingredient.name, ingredient.vendor])));

    // Add ingredients to shopping list
    for (const ingredient of listIngredients) {
        const item = { 
            id: uuidv4(),
            name: ingredient.name, 
            category: vendors[ingredient.name] || '', 
            notes: amountsToString(ingredient.amounts),
            ...ingredient.due && { due: { date: ingredient.due } }
        };
        db.list.push(item);
    }

    console.log('Missing ingredients: ', listIngredients.filter(ingredient => !vendors[ingredient.name]).map(ingredient => ({ name: ingredient.name, vendor: '' })));

    return res.json(db.list);
});

const addAmountToList = (list, amount) => {
    if (amount.unit == null) {
        return list.length > 0 ? list : [amount];
    }
    else {
        if (list.length == 1 && list[0].unit == null) {
            return [amount];
        }
        else {
            if (list.find(item => item.unit == amount.unit) == undefined) {
                return list.concat([amount]);
            }
            else {
                const newList = _.cloneDeep(list);
                sameUnit = newList.find(item => item.unit == amount.unit);
                sameUnit.value += amount.value;

                return newList;
            }
        }
    }
}

const addIngredientToList = (list, ingredient) => {
    // TODOv5: Take a look at cloneDeep
    const newList = _.cloneDeep(list);

    if (newList.find(item => item.name == ingredient.name && item.due == ingredient.due) == undefined) {
        return newList.concat([{ name: ingredient.name, amounts: [ingredient.amount], due: ingredient.due }]);
    }
    else {
        const sameIngredient = newList.find(item => item.name == ingredient.name && item.due == ingredient.due);
        sameIngredient.amounts = addAmountToList(sameIngredient.amounts, ingredient.amount);

        return newList;
    }
}

const amountsToString = (amounts) => {
    if (amounts.length == 1 && amounts[0].unit == null) {
        return '';
    }
    else {
        // TODOv5: Handle spaces correctly
        return amounts.map(amount => `${amount.value} ${amount.unit}`).join(' + ');
    }
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});