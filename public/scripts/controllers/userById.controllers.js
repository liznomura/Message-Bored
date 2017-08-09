angular.module('msgApp')
.controller(
  'UserByIdController', ['$scope', 'UserService', '$routeParams', function($scope, UserService, $routeParams) {
    $scope.user = [];
    $scope.UserService = UserService;
    var route = $routeParams;
    UserService.getUserById(route)
    .then(function(user) {
      $scope.user = user;
    });
  }]);