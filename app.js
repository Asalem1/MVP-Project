angular.module('mylist', [
  'list',
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
    .when('/list', {
      templateUrl: '/index.html',
      controller: 'listController'
    })
    .otherwise({
      redirectTo: '/index.html'
    })
})