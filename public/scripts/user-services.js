angular.module('msgApp')
.service('UserService', ['$http', function($http) {
  return {
    getUsers: function() {
      return $http.get('/api/users')
      .then(function(users) {
         return users.data;
      });
    },

    getUserById: function() {
      return $http.get('/api/users/:id')
      .then(function(user) {
        return user.data;
      });
    }
  };
}]);