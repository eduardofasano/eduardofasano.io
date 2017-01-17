angular.module('eduardo-portfolio')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('projectsIndex', {
    url: '/projects',
    templateUrl: '/templates/projectsIndex.html',
    controller: 'ProjectsIndexController as projectsIndex'
  })
  .state('projectsShow', {
    url: '/projects/:id',
    templateUrl: '/templates/projectsShow.html',
    controller: 'ProjectsShowController as projectsShow'
  })
  .state('about', {
    url: '/about',
    templateUrl: '/templates/about.html'
  })
  .state('home', {
    url: '/',
    templateUrl: '/templates/homePage.html'
  });

  $urlRouterProvider.otherwise('/');
}
