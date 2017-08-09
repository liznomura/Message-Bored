angular.module('msgApp')
.service('AuthService', ['$http', function($http) {
  return {
    getUsers: function() {
      return $http.get('/api/users')
      .then(function(users) {
         return users.data;
      });
    },
    createNewUser: function(user) {
      console.log('AuthService');
      return $http.post('/api/users', user)
      .then(function(user) {
        console.log(user);
      });
    }
  };
}]);