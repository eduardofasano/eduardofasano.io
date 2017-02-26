angular.module('eduardo-portfolio')
  .factory('Email', Email);

Email.$inject = ['$resource'];
function Email($resource) {
  return new $resource('/email/:id', { id: '@_id' }, {
  });
}
