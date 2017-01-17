const mongoose = require('mongoose');
const Project = require('../models/project');

let mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost/eduardo-portfolio';
mongoose.connect(mongoUri);

Project.collection.drop();

Project.create([{
  title: 'Presidential Dash',
  shortDescription: 'Two player game for project 1',
  description: 'Fun retro styled JavaScript Game topically based on the 2016 US Presidential Elections. Technologies used included: JavaScript, jQuery, HTML5, CSS3. Originally written in ES5 but since has been converted to ES6.',
  image: 'http://i.imgur.com/SHkrEEN.png',
  links: {
    githubLink: 'https://github.com/ruthlessammo/WDI-Project-1',
    herokuLink: 'http://presidentialdash.herokuapp.com/'
  }
}]);
