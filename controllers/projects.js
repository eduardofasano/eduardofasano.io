const Project = require('../models/project');

function projectsIndex(req, res) {
  Project.find((err, projects) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(projects);
  });
}

function projectsShow(req, res) {
  Project.findById(req.params.id, (err, project) => {
    if(err) return res.status(500).json({ error: err });
    if(!project) return res.status(404).json({ error: 'Not found' });
    return res.json(project);
  });
}

module.exports = {
  index: projectsIndex,
  show: projectsShow
};
