
app.controller('characterCtrl', ['$scope', '$stateParams',
    function ($scope, $stateParams) {
        
        $scope.characterDetails = $stateParams.obj;
        console.log($scope.characterDetails);
        $scope.characterDetails.picUrl = $scope.characterDetails.thumbnail.path + '.' + $scope.characterDetails.thumbnail.extension;
    }]);
