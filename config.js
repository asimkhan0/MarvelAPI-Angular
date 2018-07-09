var myApp = angular.module("app");

myApp.config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider
    .otherwise('app');
$stateProvider
    .state('app', {
        url: "/app",
        templateUrl: "views/app.html",
        controller: 'appCtrl'
    })
});