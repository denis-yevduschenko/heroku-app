(function() {
    'use strict';
    angular
        .module("CoffeenatorApp", ['ngRoute', 'ngAnimate', 'ng-fx', 'MyHttp'])
        .config(function($routeProvider){
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
