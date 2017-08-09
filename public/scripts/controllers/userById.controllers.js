angular.module('msgApp')
.controller(
  'UserByIdController', ['$scope', 'UserService', '$routeParams', function($scope, UserService, $routeParams) {
    $scope.user = [];
    $scope.UserService = UserService;
    var id = $routeParams;
    UserService.getUserById(id)
    .then(function(user) {
      console.log(user);
    });
  }]);