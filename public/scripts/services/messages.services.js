angular.module('msgApp')
.service('MessagesService', ['$http', function($http) {
  return {
    getLatest: function() {
      return $http.get('/api/messages/latest')
      .then(function(messages) {
         return messages.data;
      });
    },

    createNewMessage: function(message) {
      return $http.post('/api/messages', message)
      .then(function(message) {
        return message.data;
      });
    },

    getByTopic: function(topic) {
      return $http.get('/api/messages/by-topic/' + topic.id)
      .then(function(messages) {
        return messages.data;
      });
    }
  };
}]);