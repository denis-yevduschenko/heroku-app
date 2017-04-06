CoffeenatorApp.directive('reason', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '@'
        },
        templateUrl: 'js/directives/reason.html'
    };
});
