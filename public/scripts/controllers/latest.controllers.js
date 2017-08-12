angular.module('msgApp')
.controller(
  'LatestController', ['$scope', '$window', 'MessagesService', function($scope, $window, MessagesService) {
    MessagesService.getLatest()
    .then(function(messages) {
      $scope.messages = messages;
    });
  }]);