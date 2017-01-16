angular.module('eduardo-portfolio')
  .factory('Project', Project);

Project.$inject = ['$resource'];
function Project($resource) {
  return new $resource('/projects/:id', { id: '@_id' }, {
  });
}
