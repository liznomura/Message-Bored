angular.module('msgApp')
.service('TopicsService', ['$http', function($http) {
  return {
    getTopics: function() {
      return $http.get('/api/topics')
      .then(function(topics) {
         return topics.data;
      });
    },

    getTopicByName: function(route) {
      return $http.get('/api/topics/' + route.name)
      .then(function(topic) {
        console.log(topic.data);
      });
    }
  };
}]);