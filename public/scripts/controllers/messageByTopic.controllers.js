angular.module('msgApp')
.controller(
  'MessageByTopicController', ['$scope', 'MessagesService', '$routeParams', function($scope, MessagesService, $routeParams) {
    var route = $routeParams;
    MessagesService.getByTopic(route)
    .then(function(messages) {
      $scope.messages = messages;
    });
  }]);