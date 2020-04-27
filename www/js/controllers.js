angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {
  $scope.Login = {}

  $scope.obtener = function(x){
    console.log(x)
  }
})

  
.controller('registerCtrl', function($scope) {
  var database = firebase.database();
  $scope.obtener = function(r){
    firebase.auth().createUserWithEmailAndPassword(r.Email, r.Password).then(function a(y){
    swal("Su cuenta ha sido registrada correctamente")
      firebase.database().ref("usuario").push({
        correo: r.Email,
        id: y.user.uid
      });
    firebase.auth().signOut().then(function() {
    }).catch(function(error){

    })
    
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
})

  .controller('welcomeCtrl', function($scope) {
  })

.controller('DashCtrl', function($scope,$rootScope) {
  $rootScope.Categorias = [
    {
      nombreCategoria: "TV",
      imagen: "img/1.jpg"
    },
    {
      nombreCategoria: "Celulares",
      imagen: "img/2.jpg"
    },
    {
      nombreCategoria: "Linea Blanca",
      imagen: "img/3.jpg"
    },
    {
      nombreCategoria: "Video Juegos",
      imagen: "img/4.jpg"
    },
    {
      nombreCategoria: "Computacion y Tablets",
      imagen: "img/5.jpg"
    },
    {
      nombreCategoria: "Audifonos y Bocinas",
      imagen: "img/6.jpg"
    }
  ]
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
