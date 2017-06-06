var myApp=angular.module('myApp',[]);


myApp.controller('AppController',['$scope','$http',function($scope,$http){
//  console.log('AppController init');

  $scope.getAirports = function(){
    $http.get('/api/airports').then(function(response){
      $scope.airports = response;
  //    console.log(response);
    });
  }


    $scope.findAirports = function(){
      $http.get('/api/airports/state/'+$scope.stateCode).then(function(response){
        $scope.airports = response;
      });
    }



    $scope.findAirportsByProx = function(){
      var location={
        distance:$scope.location.distance
      }
      $http.get('/geocode/location?address='+$scope.location.address).then(function(loc_response){

        //console.log(loc_response);


//        console.log(loc_response.data.locations[0].latitude);

        location.lat=loc_response.data.locations[0].latitude;
        location.lon=loc_response.data.locations[0].longitude;

        $http.post('/api/airports/prox',location).then(function(response){
          $scope.airports = response;
        });

      });
    }

}]);
