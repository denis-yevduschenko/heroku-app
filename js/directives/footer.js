(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('footer', footer);

    function footer() {
        return {
            restrict: 'E',
            scope: {
            },
            templateUrl: 'js/directives/footer.html'
        };
    }
})();