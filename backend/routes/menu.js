const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();


//view products
router.get('/menu', async (req, res) => {
    try { 
        const products = await Menu.find();
        res.status(200).json(products);
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/menu/:id', async (req, res) => {
    try {
            const product = await Menu.findById(req.params.id);
            res.status(200).res.json(product);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
});

router.post('/menu', async (req, res) => {
    try {
        const product = new Menu(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Edit or update a product
router.put('/menu/:id', async (req, res) => {
    try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(menu);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

// Delete a item
router.delete('/menu/:id', async (req, res) => {
    try {
        await Menu.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
