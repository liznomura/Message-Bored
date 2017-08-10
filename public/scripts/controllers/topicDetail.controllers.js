angular.module('msgApp')
.controller(
  'TopicDetailController', ['$scope', 'TopicsService', '$routeParams', function($scope, TopicsService, $routeParams) {
    var route = $routeParams;
    TopicsService.getTopicDetail(route)
    .then(function(topic) {
      $scope.topic = {
        id: topic.id,
        name: topic.name,
        createdAt: topic.createdAt,
        creator: topic.user.name,
        creatorId: topic.user.id
      };

      $scope.topicMessages = topic.messages;
    });
  }]);