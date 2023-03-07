// var uygulama = angular.module("nUygulama", []);

var uygulama2 = angular.module("ngUygulama", []);
uygulama2.controller("FirstController", ['$scope', function($scope){
    $scope.degisken = "Merhaba Angular.min.js"; //scope dediğimiz şey aktarılacak şey.
}])  //class gibi bir yapı, fonksiyon içinde fonksiyon.