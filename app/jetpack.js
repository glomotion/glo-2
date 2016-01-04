var app = angular.module("sampleApp", []);
app.controller("SampleCtrl", function($scope, $http) {

  // Simple GET request example:
  $http({
    method: 'GET',
    url: "https://public-api.wordpress.com/rest/v1.1/sites/glo.id.au/posts/?type=page"
  }).then(function successCallback(response) {

    // this callback will be called asynchronously
    // when the response is available
    console.log(response.data);
    $scope.data = response.data.posts;

  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


});
