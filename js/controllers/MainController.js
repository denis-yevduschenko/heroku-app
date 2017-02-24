CofenatorApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.currentZoomItem = '';

    $http.get('/data/coffee.json').then(function(response){
        $scope.coffee = response.data;
    });

    $scope.zoomItem = function (item) {
        $scope.currentZoomItem = item;
    };

    $scope.hideZoomItem = function () {
        $scope.currentZoomItem = '';
    };

}]);