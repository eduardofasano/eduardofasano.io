const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const sendgrid = require('sendgrid')(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 3000;
const router = require('./config/routes');
const db = require('./config/db');

let mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost/eduardo-portfolio';
mongoose.connect(db.uri);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));
app.use(router);
// app.use(sendgrid);

app.listen(port, () => console.log(`Running on port André ${port} 🎙`));
