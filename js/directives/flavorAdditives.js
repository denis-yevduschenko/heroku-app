CofenatorApp.directive('flavorAdditives', function() {
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