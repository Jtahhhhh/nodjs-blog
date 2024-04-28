const { engine } = require('express-handlebars');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const route = require('./routes/index.route');
const db = require('./config/db')
const methodOverride = require('method-override')
// const scss = require('node-sass')

// console.log(scss)

db.connect()

const app = express();
const port = 9000;
//middle ware

//thao tác với file static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//override method
app.use(methodOverride('_method'))

console.log(path.join(__dirname, 'public'));
//commit
app.engine('hbs', engine({ 
    extname: '.hbs',
    helpers:{
        sum: (a,b) =>a+b
    } 
}));
//use layout
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routes init
route(app);

app.use(morgan('combined'));

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
);
