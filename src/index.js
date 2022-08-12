require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://syada13:g2f9IdfxvjvJY1yk@cluster0.4yayjuw.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
   console.log('Connected to mongodb instance'); 
});

mongoose.connection.on('error',(err) => {
    console.error('Error connecting to mongodb', err);

});

app.get('/', (req,res) => {
    res.send('Hi there!');
});

app.listen(3000, () =>{
    console.log('Listening on port 3000');

});