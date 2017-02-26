const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects');
const sendMail = require('../lib/ses');

router.route('/projects')
  .get(projectsController.index);

router.route('/projects/:id')
  .get(projectsController.show);


router.route('/api/sendMail')
  .post(sendMail);
// router.get('/', (req, res) => res.render('index'));

module.exports = router;
