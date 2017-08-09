angular.module('msgApp')
.controller(
  'TopicsController', ['$scope', 'TopicsService', function($scope, TopicsService) {
    $scope.topics = [];
    $scope.TopicsService = TopicsService;
    TopicsService.getTopics()
    .then(function(topics) {
      $scope.topics = topics;
    });
  }]);