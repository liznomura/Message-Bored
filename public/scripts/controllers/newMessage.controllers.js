angular.module("msgApp").controller("NewMessageController", [
  "$scope",
  "$window",
  "MessagesService",
  "TopicsService",
  function($scope, $window, MessagesService, TopicsService) {
    $scope.newMessage = {
      msgBody: "",
      topic_id: ""
    };

    // on page load
    TopicsService.getTopics().then(function(topics) {
      $scope.topics = topics;
    });

    $scope.createNewMessage = function() {
      var newMessage = {
        topic_id: $scope.newMessage.topic_id,
        msgBody: $scope.newMessage.msgBody,
        author_id: localStorage.user_id
      };
      console.log(newMessage);
      MessagesService.createNewMessage(newMessage).then(function(result) {
        $window.location.href = "/latest";
      });
    };
  }
]);
