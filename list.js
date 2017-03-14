angular.module('list', [])
.controller('ListController', function($scope) {
  $scope.items = [];
  $scope.addToList = function(item) {
    console.log('hi')
    $scope.items.push(item);
    $scope.item = '';
  }
  // var getList = function() {
  //   list.getAll()
  //     .then(function(res) {
  //       $scope.data.list = res;
  //     })
  //     .catch(function(err) {
  //       console.error(err);
  //     });
  // };
  // getList();
})