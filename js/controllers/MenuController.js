CofenatorApp.controller('MenuController', ['$scope', '$window', function($scope, $window) {

    $scope.reloadRoute = function() {
        $window.location.reload();
    };

    $scope.addSpinner = function() {
        $('.menu').find('.fa-refresh').addClass('fa-spin');
    };

    $scope.removeSpinner = function() {
        $('.menu').find('.fa-refresh').removeClass('fa-spin');
    };
}]);