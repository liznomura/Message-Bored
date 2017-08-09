/*jshint esversion:6*/
msgApp.controller(
  'RegController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.user = { name: '' };
    $scope.AuthService = AuthService;

    $scope.createNewUser = function() {
      let user = { name: $scope.user.name };
      AuthService.createNewUser(user)
      .then(function(user) {
        console.log(users);
        $scope.name = '';
      });
    };
  }]);