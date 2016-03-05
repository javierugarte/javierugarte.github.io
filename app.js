var app = angular.module("app", []);

var $URL = "http://jugarte.es/dev/cv/apps.json";


app.controller("appCtrl", function($scope, $http) {
    $http.get($URL)
    .success(function(data) {
      
      json = angular.fromJson(data);
      
      $scope.bitban = json["business"][0]["apps"];

    });
 
});