var myApp=angular.module('myApp',[]);


myApp.controller('AppController',['$scope','$http',function($scope,$http){
  console.log('AppController init');

  $scope.getAirports = function(){
    $http.get('/api/airports').then(function(response){
      $scope.airports = response;
      console.log(response);
    });
  }
}]);
