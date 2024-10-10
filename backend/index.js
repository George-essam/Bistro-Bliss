const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');
const userRoutes = require('./routes/user');

const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.json()); 

app.use('/', menuRoutes);
app.use('/', userRoutes);

mongoose.connect('mongodb://localhost:27017/BistroBliss')
.then(() => app.listen(3000, () => console.log('Server started on port 3000')))
.catch(err => console.error(err));

