(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('reason', reason);

    function reason() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            templateUrl: 'js/directives/reason.html'
        };
    }
})();