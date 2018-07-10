app.directive('charactersFullList', ['globalsvc','$state', function (globalsvc, $state) {
    return {
        restrict: "E",
        templateUrl: 'js/directives/html/charactersList.html',
      
        link: function (scope, elem, attr, ctrl) {
          scope.openCharacter = (characterId) => {
            const item = scope.charactersList.find(result => result.id === characterId);
            $state.go('character', {obj: item});
            event.preventDefault();
          }
        }
    };
}]);