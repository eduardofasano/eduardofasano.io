const mongoose = require('mongoose');
const Project = require('../models/project');

let mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost/eduardo-portfolio';
mongoose.connect(mongoUri);

Project.collection.drop();

Project.create([{}]);
