(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('flavorAdditives', function() {
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
        });
})();