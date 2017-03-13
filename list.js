angular.module('mylist.list', [])
.controller('ListController', function($scope, item) {
  var list = [];
  var addToList = function() {
    list.push($scope.item);
  }
  var getList = function() {
    list.getAll()
      .then(function(res) {
        $scope.data.list = res;
      })
      .catch(function(err) {
        console.error(err);
      });
  };
  getList();
})