angular.module('msgApp')
.controller(
  'UserByIdController', ['$scope', 'UserService', function($scope, UserService) {
    $scope.user = [];
    $scope.UserService = UserService;
    UserService.getUserById()
    .then(function(user) {
      console.log(user);
    });
  }]);