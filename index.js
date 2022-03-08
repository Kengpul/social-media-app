const express = require('express');
const ejsMate = require('ejs-mate')
const path = require('path');
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('on PORT 3000')
})