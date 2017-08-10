angular.module('msgApp')
.service('MessagesService', ['$http', function($http) {
  return {
    getLatest: function() {
      return $http.get('/api/messages/latest')
      .then(function(messages) {
         return messages.data;
      });
    }

    // createNewTopic: function(topic) {
    //   return $http.post('/api/topics/', topic)
    //   .then(function(topic) {
    //     return topic.data;
    //   });
    // },

    // getTopicDetail: function(route) {
    //   return $http.get('/api/topics/' + route.id)
    //   .then(function(topic) {
    //     return topic.data;
    //   });
    // }
  };
}]);