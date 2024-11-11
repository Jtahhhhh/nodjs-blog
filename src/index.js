const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes/index.route');
const db = require('./config/db');

// Kết nối cơ sở dữ liệu
db.connect();

const app = express();
const port = 9000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Logger
app.use(morgan('combined'));

// View engine setup
app.engine('hbs', engine({ 
    extname: '.hbs',
    helpers:{
        sum: (a, b) => a + b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Initialize routes
route(app);

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
