var CoffeenatorApp = angular.module("CoffeenatorApp", ['ngRoute', 'MyHttp']);

CoffeenatorApp.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'MainController'
        })
        .when('/about', {
            templateUrl: 'templates/about.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/',
            controller: 'MainController'
        });
});

