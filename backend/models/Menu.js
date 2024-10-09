const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description:{type: String},
    category:{type: String},
    imageUrl: { type: String },
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
