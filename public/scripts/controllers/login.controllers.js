angular.module('msgApp')
.controller(
  'LoginController', ['$scope', '$window', 'AuthService', function($scope, $window, AuthService) {
    $scope.user = { name: '' };
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
          $window.location.href ='/';
        }
      });
    };
  }]);