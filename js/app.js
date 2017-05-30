(function() {
    'use strict';
    var CoffeenatorApp = angular.module("CoffeenatorApp", ['ngRoute', 'ngAnimate', 'ng-fx', 'MyHttp']);

    CoffeenatorApp.config(function($routeProvider){
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
            .when('/404', {
                templateUrl: 'templates/404.html'
            })
            .otherwise({
                redirectTo: '/404',
                controller: 'ErrorPageController'
            });
    });
})();
