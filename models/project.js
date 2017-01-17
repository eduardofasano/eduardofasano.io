const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  shortDescription: { type: String },
  images: [{ type: String }],
  links: {
    github: { type: String },
    heroku: { type: String }
  }
});

module.exports = mongoose.model('Project', projectSchema);
