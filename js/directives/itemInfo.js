CofenatorApp.directive('itemInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/itemInfo.html'
    };
});
