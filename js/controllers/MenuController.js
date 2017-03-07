CoffeenatorApp.controller('MenuController', ['$scope', '$window', function($scope, $window) {
    $scope.IsHidden = true;

    $scope.ShowHide = function () {
        //If DIV is hidden it will be visible and vice versa.
        $scope.IsHidden = $scope.IsHidden ? false : true;
    };

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