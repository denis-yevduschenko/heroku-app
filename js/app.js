var CoffeenatorApp = angular.module("CoffeenatorApp", ['ngRoute']);

CoffeenatorApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvide
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'MainController'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'MainController'
        })
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);