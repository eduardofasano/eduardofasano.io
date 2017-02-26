const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: { type: String },
  address: { type: String },
  subject: { type: String },
  body: { type: String }
});

module.exports = mongoose.model('Email', projectSchema);
