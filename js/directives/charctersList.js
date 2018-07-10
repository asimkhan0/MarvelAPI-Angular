app.directive('charactersFullList', ['globalsvc','$state', function (globalsvc, $state) {
    return {
        restrict: "E",
        templateUrl: 'js/directives/html/charactersList.html',
        scope: {
            charactersList: '<'
        },
        link: function (scope, elem, attr, ctrl) {

        }
    };
}]);