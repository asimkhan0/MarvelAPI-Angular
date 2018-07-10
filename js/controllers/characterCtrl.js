app.controller('characterCtrl', ['$scope', '$stateParams','$state',
    function ($scope, $stateParams,$state) {

        if(!$stateParams.obj.id && $state.current.name === 'character'){
            $state.go('app');
        }
        $scope.characterDetails = $stateParams.obj;
        if($scope.characterDetails.thumbnail) {
          $scope.characterDetails.picUrl = $scope.characterDetails.thumbnail.path + '.' + $scope.characterDetails.thumbnail.extension;
        }
    }]);
