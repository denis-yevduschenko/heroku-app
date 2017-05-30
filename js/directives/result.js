(function() {
    'use strict';
    angular
        .module("CoffeenatorApp")
        .directive('result',result);

    function result() {
        return {
            restrict: 'E',
            scope: {
                search: '=',
                chosen: '=',
                quantity: '='
            },
            templateUrl: 'js/directives/result.html',
            link: function (scope, element, attr) {
                scope.showCount = function () {
                    $('.section-first').find('.result-footer').show("medium");
                };

                scope.hideCount = function () {
                    $('.section-first').find('.result-footer').hide("medium");
                };
            }
        };
    }
})();