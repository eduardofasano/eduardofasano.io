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
},{
  title: 'Disaster Squawk',
  shortDescription: 'Two player game for project 1',
  description: 'A group project where you can learn about the world’s natural disasters in real time.  This project involved taking into account project management within a group and how to deal with conflicts. Making requests to MongoDB as well as the implementation of external APIs such as NASA and Twitter. The technology used was jQuery, Node.JS, Express, AJAX, external APIs MongoDB, HTML5 and SCSS.',
  links: {
    githubLink: 'https://github.com/eduardofasano/chuckecheese',
    herokuLink: 'http://disastersquawk.herokuapp.com/'
  },
  image: 'http://i.imgur.com/YwZJ5C7.png'
}]);
