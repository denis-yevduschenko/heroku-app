(function (){
    angular
        .module("CoffeenatorApp")
        .controller('MenuController', ['$scope', '$window', function($scope, $window) {

            $scope.reloadRoute = function() {
                $window.location.reload();
            };

        }]);
})();