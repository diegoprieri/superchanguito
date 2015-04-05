var scApp = angular.module('scApp', ["angucomplete-alt", "ngRoute"]);

scApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/fillCart', {
		templateUrl: 'templates/fillCart.html',
		controller: 'mainController'
      }).
      when('/results', {
		templateUrl: 'templates/results.html',
		controller: 'resultsController'
      }).
      otherwise({
		redirectTo: '/fillCart'
      });
}]);