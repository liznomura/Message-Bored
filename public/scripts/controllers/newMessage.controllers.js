angular.module('msgApp')
.controller(
  'NewMessageController', ['$scope', '$window', 'MessagesService', 'TopicsService', function($scope, $window, MessagesService, TopicsService) {
    $scope.newMessage = { name: '',  };
    $scope.topicSelect = null;
    $scope.topics = [];
    TopicsService.getTopics()
    .then(function(topics) {
      console.log(topics);
      $scope.topics = topics;
    });


    $scope.createNewMessage = function() {
      var newMessage = {
        topic_id: $scope.topicSelect,
        body: $scope.newMessage.body,
        created_by: localStorage.user_id
      };

      MessagesService.createNewMessage(newMessage);
      $window.location.href = '/latest';
    };
  }]);