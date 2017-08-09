/*jshint esversion:6*/
msgApp.controller(
  'UsersController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.users = [];
    $scope.AuthService = AuthService;
    UserService.getUsers()
    .then(function(users) {
      console.log(users);
      $scope.users = users;
    });
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