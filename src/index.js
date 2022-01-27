const express = require('express');
const mongoose = require('mongoose');
const routes = require('./config/routes');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/films_and_music')
    .then(listen)
    .catch(err => console.log(err));

function listen() {
    app.listen(port, () => {
        console.log(` Great! app listening at http://localhost:${port}`)
    });
}