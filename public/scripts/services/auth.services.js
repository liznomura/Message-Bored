angular.module('msgApp')
.service('AuthService', ['$http', function($http) {
  return {
    createNewUser: function(user) {
      return $http.post('/api/users', user)
      .then(function(user) {
        return user;
      });
    },

    login: function(user) {
      return $http.post('/api/login', user)
      .then(function(response) {
        return response.data;
      });
    },

    setUser: function(user) {
      localStorage.setItem('user', user.name);
    },

    logout: function(user) {
      localStorage.removeItem('user');
    }
  };
}]);