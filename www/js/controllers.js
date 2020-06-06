angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {
  $scope.Login = {}

  $scope.obtener = function(x){
    console.log(x)
  }
})

.controller('ProductsCtrl', function($scope,$rootScope){
  $rootScope.productos = [];
  firebase.database().ref("productos").on("value", function(datos){
    $rootScope.productos = datos.val();
  })
  console.log($rootScope.productos)
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

.controller('DashCtrl', function($scope,$rootScope,$state) {
  $rootScope.Categorias = [
    {
      nombreCategoria: "Electronica",
      imagen: "img/1.jpg",
      descripcion: "Televisores, audio y reproductores"
    },
    {
      nombreCategoria: "Linea Blanca",
      imagen: "img/2.jpg",
      descripcion: "Refrigeración, estufas, lavadoras"
    },
    {
      nombreCategoria: "Celulares",
      imagen: "img/3.jpg",
      descripcion: "Tigo, Claro y Liberados"
    },
    {
      nombreCategoria: "ElectroDomésticos",
      imagen: "img/4.jpg",
      descripcion: "Licuadoras, Planchas, Batidoras"
    },
    {
      nombreCategoria: "Videojuegos",
      imagen: "img/5.jpg",
      descripcion: "PlayStatio, Xbox One, Pc Gaming "
    },
    {
      nombreCategoria: "Cuidado Personal",
      imagen: "img/6.jpg",
      descripcion: "Dama, Caballero y salud"
    }
  ]
  $scope.viewProduct= function(){
    $state.go("tab.Products")
  }
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
