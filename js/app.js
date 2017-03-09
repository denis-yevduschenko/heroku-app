var CoffeenatorApp = angular.module("CoffeenatorApp", ['ngRoute']);

CoffeenatorApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvide
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);