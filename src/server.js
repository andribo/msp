'use strict';

const path = require('path')
const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.render('index', { title: 'MSP', app: 'app.js' });
});

app.listen(3003);
