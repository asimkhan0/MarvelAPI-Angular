var app = angular.module('app');

app.controller('appCtrl', ['$scope','globalsvc', function($scope,globalsvc) {
    console.log('app controller');
    $scope.loading = false;
    $scope.availableTags = [];
}]);
