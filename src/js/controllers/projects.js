angular.module('eduardo-portfolio')
  .controller('ProjectsIndexController', ProjectsIndexController)
  .controller('ProjectsShowController', ProjectsShowController);

ProjectsIndexController.$inject = ['Project'];
function ProjectsIndexController(Project) {
  const projectsIndex = this;

  projectsIndex.all = Project.query();
}

ProjectsShowController.$inject = ['Project', '$state'];
function ProjectsShowController(Project, $state) {
  const projectsShow = this;

  projectsShow.project = Project.get($state.params);
}
