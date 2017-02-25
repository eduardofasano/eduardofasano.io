const mongoose = require('mongoose');
const Project = require('../models/project');

const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost/eduardo-portfolio';
mongoose.connect(mongoUri);

Project.collection.drop();

Project.create([{
  title: 'Dr. Kawashima\'s Memory Game',
  shortDescription: 'Test and train your memory under the guidance of the renowned Dr. Kawashima',
  description: 'A spin on Nintendo\'s blockbuster 3DS Brain-Training. This version of the game built on the original by adding different levels of difficulty, which flex the size of the grid to remember, as well as giving users the optionality of using different available languages: english, simplified chinese characters, numbers and... emojis!! Technoglogies used: Javascript, HTML, CSS, heroku-hosting.',
  image: '/images/kawashima1.png',
  githubLink: 'https://github.com/eduardofasano/WDI_LDN_Project-1',
  herokuLink: 'https://project-kawashima.herokuapp.com/'
},{
  title: 'Disaster Squawk',
  shortDescription: 'Learn and hear about the world\'s ongoing natural disasters in real time',
  description: 'A group project to allow users to learn and be aware of the world’s ongoing natural disasters in real time. This project populates the map of the world with circles for where natural disasters are currently taking place. When clicked on, a user will see all of the tweets relating to that disaster. Technical challenges: making requests to MongoDB as well as the implementation of external APIs such as NASA and Twitter. Technology used: jQuery, Node.JS, Express, AJAX, external APIs MongoDB, HTML5 and SCSS.',
  image: '/images/DS2.png',
  githubLink: 'https://github.com/eduardofasano/chuckecheese',
  herokuLink: 'https://disastersquawk.herokuapp.com/'
},{
  title: 'Bored.',
  shortDescription: 'Bored? Make a board! Create, clip, post and follow boards of images and videos',
  description: 'Bored? Make a board! Inspired by Pinterest Bored. allows users to create boards of images and videos which they can then share with the world. Users can clip and paste posts from boards they like onto their own. Technical challenges: front and back end requests to render content using Angular.js. Technology used: Angular.js, jQuery, Node.JS, Express, AJAX, authentication, MongoDB, HTML5 and SCSS.',
  image: '/images/bored1.png',
  githubLink: 'https://github.com/janemaguire/boardapp',
  herokuLink: 'https://bored-app.herokuapp.com/'
},{
  title: 'Farm-Savour',
  shortDescription: 'Bored? Make a board! Create, clip, post and follow boards of images and videos',
  description: 'Farm Savour is a flash sale, and communal-buying eCommerce platform where shoppers can collectively support artisans and craftsmen by ordering produce for a predefined period of time. During this time, the more people buy, the lower the price will be once the sale ends, for everyone. Farms and farmers markets embody a lot of the good that lead to strong communities - this platform equally balances the needs of craftsmen, artisans, farmers and shoppers to help enjoy and share amazing produce. Technology used: Angular.js, Rails, jQuery, Ruby, Node.JS, Authentication, MongoDB, HTML5 and SCSS.',
  image: '/images/FS1.png',
  githubLink: 'https://github.com/eduardofasano/final-project-frontend',
  herokuLink: 'https://farm-savour-frontend.herokuapp.com/#/'
}], (err, projects) => {
  if(err) console.log('There was an error creating projects', err);

  console.log(`${projects.length} projects created!`);
  mongoose.connection.close();
});
