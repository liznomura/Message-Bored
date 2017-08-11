angular.module("msgApp").service("TopicsService", [
  "$http",
  function($http) {
    return {
      getTopics: function() {
        return $http.get("/api/topics").then(function(topics) {
          return topics.data;
        });
      },

      createNewTopic: function(topic) {
        return $http.post("/api/topics/", topic).then(function(topic) {
          return topic.data;
        });
      },

      getTopicDetail: function(route) {
        return $http.get("/api/topics/" + route.id).then(function(topic) {
          return topic.data;
        });
      }
    };
  }
]);
