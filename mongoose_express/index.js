const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Mongo Connection open!!')
    })
    .catch(err => {
        console.log('Oh no Mongo Connection error!!!')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF!')
})

app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000!')
})