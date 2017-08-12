angular.module("msgApp").service("UserService", [
  "$http",
  function($http) {
    return {
      getUsers: function() {
        return $http.get("/api/users").then(function(users) {
          return users.data;
        });
      },

      getUserById: function(route) {
        return $http.get("/api/users/" + route.id).then(function(user) {
          return user.data;
        });
      }
    };
  }
]);
