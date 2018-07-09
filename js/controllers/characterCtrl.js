var app = angular.module('app');

app.controller('characterCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {
        
        $scope.characterDetails = $stateParams.obj;
        $scope.characterDetails.picUrl = $scope.characterDetails.thumbnail.path + '.' + $scope.characterDetails.thumbnail.extension;
    }]);
