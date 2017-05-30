(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('currentItem', currentItem);

    function currentItem() {
        return {
            restrict: 'E',
            scope: {
                item: '=',
                'close': '&close'
            },
            templateUrl: 'js/directives/currentItem.html'
        };
    }
})();