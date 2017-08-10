angular.module('msgApp')
.controller(
  'newTopicController', ['$scope', '$window', 'TopicsService', function($scope, $window, TopicsService) {
    $scope.newTopic = { name: '' };
    $scope.createNewTopic = function() {
      var newTopic = {
        name: $scope.newTopic.name,
        created_by: localStorage.user_id
      };

      TopicsService.createNewTopic(newTopic);
      $window.location.href = '/topics';
    };
  }]);