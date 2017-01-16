const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: { type: String },
  about: { type: String },
	githubLink: { type: String },
	herokuLink: { type: String },
  image1: { type: String },
  image2: { type: String },
  image3: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
