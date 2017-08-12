angular.module('msgApp').service('TopicsService', [
  '$http',
  function($http) {
    return {
      getTopics: function() {
        return $http.get('/api/topics').then(function(topics) {
          return topics.data;
        });
      },

      createNewTopic: function(topic) {
        return $http.post('/api/topics/', topic).then(function(topic) {
          return topic.data;
        });
      },

      getTopicDetail: function(route) {
        return $http.get('/api/topics/' + route.id).then(function(topic) {
          return topic.data;
        });
      },

      // based on StackOverflow answer from Cristian Sanchez
      // https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript

      hashCode: function(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
          hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }

        return hash;
      },

      intToRGB: function(i) {
        var hex =
          ((i >> 24) & 0xff).toString(16) +
          ((i >> 16) & 0xff).toString(16) +
          ((i >> 8) & 0xff).toString(16) +
          (i & 0xff).toString(16);

        hex += '000000';
        return hex.substring(0, 6);
      }
    };
  }
]);
