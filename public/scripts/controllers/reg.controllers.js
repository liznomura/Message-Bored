msgApp.controller(
  'RegController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.user = { name: '' };
    $scope.AuthService = AuthService;

    $scope.createNewUser = function() {
      var user = { name: $scope.user.name };
      AuthService.createNewUser(user)
      .then(function(user) {
        $scope.user.name = '';
      });
    };
  }]);