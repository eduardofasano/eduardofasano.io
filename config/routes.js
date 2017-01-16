const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects');

router.route('/projects')
  .get(projectsController.index);

router.route('/projects/:id')
  .get(projectsController.show);

// router.get('/', (req, res) => res.render('index'));

module.exports = router;
