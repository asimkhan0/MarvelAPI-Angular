var app = angular.module('app');

app.controller('appCtrl', ['$scope','globalsvc', function($scope,globalsvc) {
    console.log('app controller');
    $scope.loading = false;
    $scope.availableTags = [];

    $scope.searchTerm = function(event, ui) {
        var val = event.target.value;
        globalsvc.GetHeroesList(val)
        .then(function(response){
            $scope.availableTags = [];
            charInfoArr=response.data.data.results;
            response.data.data.results.map(function(item){
              $scope.availableTags.push(item.name);
              $( "#searchBox" ).autocomplete({
                source: $scope.availableTags,
              });
            });
          });
  };

  $scope.optionSelected = function(event, ui){
    debugger;
  }

      $( "#searchBox" ).autocomplete({
        source: $scope.availableTags,
        search: $scope.searchTerm,
        select: $scope.optionSelected,
        delay: 0

      });
}]);
