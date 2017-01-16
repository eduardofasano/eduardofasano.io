angular.module('eduardo-portfolio')
    .controller('MainController', MainController);

MainController.$inject = ['$scope', '$rootScope'];
function MainController($scope, $rootScope) {
  const main = this;

  function secureState(e, toState) {
    main.controllerName = toState.name;
    console.log(toState.name);
  }

  $rootScope.$on('$stateChangeStart', secureState);
}
