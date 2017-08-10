angular.module('msgApp')
.controller(
  'UsersController', ['$scope', 'UserService', function($scope, UserService) {
    $scope.users = [];
    UserService.getUsers()
    .then(function(users) {
      console.log(users);
      $scope.users = users;
    });
  }]);