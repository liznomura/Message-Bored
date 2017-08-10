angular.module('msgApp')
.controller(
  'LogoutController', ['$scope', 'AuthService', function($scope, AuthService) {
      AuthService.logout();
  }]);