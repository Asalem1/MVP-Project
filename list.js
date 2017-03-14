angular.module('list', [])

.controller('ListController', function($scope) {
  $scope.items = [];
  $scope.addToList = function(item) {
    $scope.items.push(item);
    $scope.item = '';
    // send post request to server
    // server must update DB
  }
  $scope.delete = function(item) {
    $scope.items.splice(item, 1);
  }

})