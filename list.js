angular.module('list', [])
.controller('ListController', function($scope) {
  $scope.items = [];
  $scope.addToList = function(item) {
    $scope.items.push(item);
    $scope.item = '';
  }
  $scope.delete = function(item) {
    $scope.items.splice(item, 1);
  }
})