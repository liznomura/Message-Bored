/*jshint esversion:6*/
msgApp.controller(
  'RegController', ['$scope', 'Users', function($scope, Users) {
    $scope.users = [];
    $scope.search = '';
    Users.getUsers()
    .then((users) => {
      $scope.users = users;
    });
  }]);