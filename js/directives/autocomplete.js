app.directive('autoComplete', ['globalsvc','$state', function (globalsvc, $state) {
    return {
        restrict: "A",
        link: function (scope, elem, attr, ctrl) {
            $(elem).autocomplete({
                source: function (searchTerm, response) {
                    globalsvc.GetHeroesList(searchTerm.term).then(function (autocompleteResults) {
                        scope.results = autocompleteResults.data.data.results;
                        response($.map(scope.results, function (autocompleteResult) {
                            return {
                                label: autocompleteResult.name,
                                value: autocompleteResult.id
                            }
                        }))
                    });
                },
                minLength: 3,
                select: function (event, selectedItem) {
                    const item = scope.results.find(result => result.id === selectedItem.item.value);
                    $state.go('character', {obj: item});
                    //scope.optionSelected(selectedItem.item.value);
                    //scope.$apply();
                    event.preventDefault();
                }
            });
        }
    };
}]);