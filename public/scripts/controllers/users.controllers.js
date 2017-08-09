/*jshint esversion:6*/
msgApp.controller(
  'UsersController', ['$scope', 'UserService', function($scope, UserService) {
    $scope.users = [];
    $scope.UserService = UserService;
    UserService.getUsers()
    .then(users => {
      console.log(users);
      $scope.users = users;
    });
  }]);