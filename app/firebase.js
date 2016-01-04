var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $timeout) {

  $scope.loading = true;
  var baseRef = new Firebase("https://glo2.firebaseio.com");

  baseRef.child('item')
    .orderByChild('post_type')
    .equalTo('page')
    .once('value', function(snap) {
      $timeout(function(){
        $scope.loading = false;
        $scope.data = snap.val();
        console.log($scope.data);
      });
    });

});
