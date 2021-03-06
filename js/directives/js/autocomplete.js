app.directive('autoComplete', ['globalsvc','$state', function (globalsvc, $state) {
    return {
        restrict: "E",
        templateUrl: 'js/directives/html/autocomplete.html',
        link: function (scope, elem, attr, ctrl) {
            $('#searchBox').autocomplete({
                source: (searchTerm, response) => {
                    globalsvc.GetHeroesList(searchTerm.term).then(function (autocompleteResults) {
                        scope.results = autocompleteResults.data.data.results;
                        console.log(scope.results);
                        scope.charactersList = autocompleteResults.data.data.results;
                        response($.map(scope.results.slice(0, 5), function (autocompleteResult) {
                            return {
                                label: autocompleteResult.name,
                                value: autocompleteResult.name,
                                id: autocompleteResult.id
                            }
                        }))
                    });
                },
                minLength: 1,
                select: (event, selectedItem) => {
                    const item = scope.results.find(result => result.id === selectedItem.item.id);
                    $state.go('character', {obj: item});
                    //scope.optionSelected(selectedItem.item.value);
                    //scope.$apply();
                    event.preventDefault();
                }
            });
        }
    };
}]);