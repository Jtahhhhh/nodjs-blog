const { engine } = require('express-handlebars');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const scss = require('node-sass')

// console.log(scss)

const app = express();
const port = 3000;

//thao tác với file static
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'))
//commit
app.engine('hbs', engine({
    extname: '.hbs'
   }));
//use layout
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));

app.get('/', (req, res) => res.render('home'));
app.get('/tin-tuc', (req, res) => res.render('news'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
