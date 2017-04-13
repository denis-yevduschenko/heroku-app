CoffeenatorApp.controller("ErrorPageController", ['$scope', function($scope) {
    $scope.isHidden = false;

    $scope.toggle = function () {
        $scope.isHidden = !$scope.isHidden;
    };
}]);
