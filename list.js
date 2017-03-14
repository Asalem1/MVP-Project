angular.module('list', [])

.factory('Items', function ($http) {
  var addOne = function (item) {
    console.log(item);
    return $http({
      method: 'POST',
      url: '/api/list',
      data: item
    });
  };

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/list',
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    addOne: addOne,
    getAll: getAll
  };
})

.controller('ListController', function($scope, Items) {
  $scope.items = [];
  $scope.addToList = function(item) {
    $scope.items.push(item);
    $scope.item = '';
  }
  $scope.delete = function(item) {
    $scope.items.splice(item, 1);
  }
  $scope.obj = {};
  var getList = function(item) {
    Items.getAll({item: item})
      .them(function(resp) {
        $scope.obj.item = resp;
      })
      .catch(function(err) {
        console.error(err);
      });
    getList();
  }
})