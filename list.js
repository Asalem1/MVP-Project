angular.module('list', [])

.factory('Items', function ($http) {
  var addOne = function (item) {
    $http({
      method: 'POST',
      url: '/myList',
      data: { "item": item }
    });
  };

  var getAll = function(callback) {
    return $http({
      method: 'GET',
      url: '/myList',
    })
    .then(function (resp) {
      callback(resp.data);
    });
  };

  return {
    addOne: addOne,
    getAll: getAll
  };
})

.controller('ListController', function($scope, Items) {
  $scope.lists = [];
  $scope.addToList = function(item) {
    $scope.lists.push(item);
    Items.addOne(item)
    $scope.item = '';
  }
  $scope.delete = function(item) {
    $scope.lists.splice(item, 1);
  }
  $scope.obj = {};
  var getList = function(item) {
    Items.getAll()
      .them(function(resp) {
        $scope.obj.item = resp;
      })
      .catch(function(err) {
        console.error(err);
      });
    getList();
  }
})