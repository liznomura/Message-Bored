/*jshint esversion:6*/
msgApp.controller(
  'RegController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.user = { name: '' };
    $scope.AuthService = AuthService;

    $scope.createNewUser = function() {
      let user = { name: $scope.user.name };
      AuthService.createNewUser(user)
      .then(function(user) {
        console.log(users);
        $scope.name = '';
      });
    };
  }]);


// myApp.controller(
//   'BookController', ['$scope', 'BookService', function($scope, BookService) {
//   $scope.newBook = { title: '', author: '' };
//   $scope.BookService = BookService;
//   $scope.addBook = function() {
//     var newBook = {
//       title: $scope.newBook.title,
//       author: $scope.newBook.author
//     };
//     BookService.addBook(newBook);
//     $scope.newBook.title = '';
//     $scope.newBook.author = '';
//   };
// }]);