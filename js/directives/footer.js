(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('footer', function() {
            return {
                restrict: 'E',
                scope: {
                },
                templateUrl: 'js/directives/footer.html'
            };
        });
})();