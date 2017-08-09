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
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'register.html',
    controller: 'RegController'
  })
  .when('/users', {
    templateUrl: 'users.html',
    controller: 'UsersController'
  })
  .when('/users/:id', {
    templateUrl: 'user.html',
    controller: 'UserByIdController'
  })
  .when('/topics', {
    templateUrl: 'topics.html',
    controller: 'TopicsController'
  })
  .otherwise({ redirectTo: '/' });

  $locationProvider.html5Mode({
    enabled: true
  });
}])
.run(function(){
    // initialize
    console.log('running');
});