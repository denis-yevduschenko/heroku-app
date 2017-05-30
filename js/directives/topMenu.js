(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('topMenu', topMenu);

    function topMenu() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'js/directives/topMenu.html',
            link: function (scope, element, attr) {

            }
        };
    }
})();