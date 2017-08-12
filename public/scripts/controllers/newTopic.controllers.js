angular.module('msgApp').controller('NewTopicController', [
  '$scope',
  '$window',
  'TopicsService',
  function($scope, $window, TopicsService) {
    $scope.newTopic = { name: '', color: '' };
    $scope.createNewTopic = function() {
      var newTopic = {
        name: $scope.newTopic.name,
        color: TopicsService.intToRGB(
          TopicsService.hashCode($scope.newTopic.name)
        ),
        created_by: localStorage.user_id
      };

      TopicsService.createNewTopic(newTopic);
      $window.location.href = '/topics';
    };
  }
]);
