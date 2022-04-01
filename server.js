const gradient = require('gradient-string');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create();

const app = express();
const PORT = process.env.PORT || 5000;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/js')));

app.use(routes);

app.listen(PORT, () =>
  console.log(gradient.atlas(`Now listening @ http://localhost:${PORT}`))
);
