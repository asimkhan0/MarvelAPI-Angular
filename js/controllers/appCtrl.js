var app = angular.module('app');

app.controller('appCtrl', ['$scope','globalsvc', function($scope,globalsvc) {
    $scope.loading = false;
    $scope.availableTags = [];
}]);
