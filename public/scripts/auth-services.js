angular.module('msgApp')
.service('AuthService', ['$http', function($http) {
  return {
    createNewUser: function(user) {
      console.log('AuthService');
      return $http.post('/api/users', user)
      .then(function(user) {
        return user;
      });
    }
  };
}]);