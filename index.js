const express = require('express');
const ejsMate = require('ejs-mate')
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

const postRoutes = require('./routes/posts');

mongoose.connect('mongodb://localhost:27017/socialMediaApp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.use('/post', postRoutes);

app.listen(3000, () => {
    console.log('on PORT 3000')
})