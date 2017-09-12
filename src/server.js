'use strict';

const path = require('path')
const express = require('express');
const exphbs  = require('express-handlebars');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: { colors: true }
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {
    res.render('index', { title: 'MSP', app: 'app.js', dependencies: { normalize: '7.0.0' }});
});

app.listen(process.env.PORT || 3001);
