// creation uses a 2nd array argument to import dependencies
angular.module("msgApp", ["ngRoute"]);

// retrieval has only one argument
var msgApp = angular.module("msgApp");

msgApp
  .config([
    "$routeProvider",
    "$locationProvider",
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "latest.html",
          controller: "LatestController"
        })
        .when("/login", {
          templateUrl: "login.html",
          controller: "LoginController"
        })
        .when("/register", {
          templateUrl: "register.html",
          controller: "RegController"
        })
        .when("/users", {
          templateUrl: "users.html",
          controller: "UsersController"
        })
        .when("/users/:id", {
          templateUrl: "user.html",
          controller: "UserByIdController"
        })
        .when("/new-topic", {
          templateUrl: "new-topic.html",
          controller: "NewTopicController"
        })
        .when("/topics/:id", {
          templateUrl: "topic-detail.html",
          controller: "TopicDetailController"
        })
        .when("/latest", {
          templateUrl: "latest.html",
          controller: "LatestController"
        })
        .when("/new-message", {
          templateUrl: "new-message.html",
          controller: "NewMessageController"
        })
        .when("/messages/by-topic/:id", {
          templateUrl: "message-by-topic.html",
          controller: "MessageByTopicController"
        })
        .otherwise({ redirectTo: "/" });

      $locationProvider.html5Mode({
        enabled: true
      });
    }
  ])
  .run([
    "$rootScope",
    "$window",
    "AuthService",
    function($rootScope, $window, AuthService) {
      $rootScope.isLoggedIn = localStorage.loggedIn;
      $rootScope.loggedInUserId = localStorage.user_id;
      $rootScope.loggedInUserName = localStorage.user;

      $rootScope.logout = function() {
        AuthService.logout();
        $window.location.href = "/";
      };
      console.log("running");
    }
  ]);
