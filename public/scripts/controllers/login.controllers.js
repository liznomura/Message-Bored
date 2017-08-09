angular.module('msgApp')
.controller(
  'LoginController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.user = { name: '' };
    $scope.AuthService = AuthService;
    $scope.login = function() {
      AuthService.login($scope.user)
      .then(function(response) {
        switch(response) {
          case 'loginErr':
          $scope.errorMessage = 'User does not exist';
          break;
          default:
          $scope.errorMessage = false;
          AuthService.setUser(response);
        }
      });
    };
  }]);

// msgApp.controller(
//   'RegController', ['$scope', 'AuthService', function($scope, AuthService) {
//     $scope.user = { name: '' };
//     $scope.AuthService = AuthService;

//     $scope.createNewUser = function() {
//       var user = { name: $scope.user.name };
//       AuthService.createNewUser(user)
//       .then(function(user) {
//         $scope.user.name = '';
//       });
//     };
//   }]);