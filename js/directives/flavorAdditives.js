(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('flavorAdditives', flavorAdditives);

    function flavorAdditives() {
        return {
            restrict: 'E',
            scope: {
                additive: '=',
                'choose': '&choosen'
            },
            templateUrl: 'js/directives/flavorAdditives.html',
            link: function(scope, element, attr) {

            }
        };
    }
})();