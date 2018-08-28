'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$http','$scope', '$location', function($http, $scope, $location) {
  var options = {
    method: 'GET',
    url: 'http://localhost:8000/api/article/',
    headers : {
      'Content-Type': 'application/json',
    }
  }
  $http(options)
  .then(function(response) {
    console.log("response is",response);
    $scope.response = response.data;
  }).catch(function (err) {
    console.log("error is",err);
  });

  $scope.upvote = function(item) {
    console.log("upvote is",item.article_id);
    var payload = {"article_id":item.article_id};
    console.log("payload is",payload);
    var options = {
      method: 'PUT',
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