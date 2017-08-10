msgApp.controller(
  'RegController', ['$scope', '$window', 'AuthService', function($scope, $window, AuthService) {
    $scope.user = { name: '' };
    $scope.createNewUser = function() {
      var user = { name: $scope.user.name };
      AuthService.createNewUser(user);
      $window.location.href = '/login';
    };
  }]);