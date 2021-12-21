const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
res.send('great!')
});

mongoose.connect('mongodb://localhost:27017/films_and_music')
    .then(() => {
        app.listen(port, () => {
            console.log(` Great! app listening at http://localhost:${port}`)
        });
    })
