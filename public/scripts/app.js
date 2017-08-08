// creation uses a 2nd array argument to import dependencies
angular.module('msgApp', ['ngRoute']);

// retrieval has only one argument
var msgApp = angular.module('msgApp');

msgApp
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  })
  // .when('/books', {
  //   templateUrl: 'book.html',
  //   controller: 'BookController'
  // })
  // .when('/movies', {
  //   templateUrl: 'movie.html',
  //   controller: 'MovieController'
  // })
  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}])
.run(function(){
    // initialize
    console.log('running');
});