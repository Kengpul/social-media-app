const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('test page');
})

app.listen(3000, () => {
    console.log('on PORT 3000')
})