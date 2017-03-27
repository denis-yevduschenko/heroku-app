CoffeenatorApp.directive('currentItem', function() {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            'close': '&close'
        },
        templateUrl: 'js/directives/currentItem.html'
    };
});
