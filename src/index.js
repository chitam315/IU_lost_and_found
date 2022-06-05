
const express = require('express');
const path = require('path');
const eprhbs = require('express-handlebars');
const morgan = require('morgan');

const router = require('./routes');
const db = require('/Users/nguyenlechitam/workspace/Education_web/src/config/db')

const app = express();
const port = 3000;

router(app);

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public', 'css')));

//Connect db
db.connect()

app.use(morgan('combined'))

const engine = eprhbs.engine;

//Template engine
app.engine('.hbs', engine({ 
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b,
    }
 }));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

//HTTP logger