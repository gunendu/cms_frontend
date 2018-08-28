'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.name = "";
  $scope.content = "";
  $scope.save = function() {
    var payload = {"author_name":$scope.name,"content":$scope.content};
    var options = {
      method: 'POST',
      url: 'http://localhost:8000/api/article/',
      data: payload,
      headers : {
        'Content-Type': 'application/json',
      }
    }

    $http(options)
    .then(function(response){
      console.log("response is",response);
    }).catch(function(err) {
      console.log("error is",err);
    })  
  }

}]);