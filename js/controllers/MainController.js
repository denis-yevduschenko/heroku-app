CofenatorApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.currentZoomItem = '';
    $scope.choosenAdditives = '';


    $http.get('/data/coffee.json').then(function(response){
        $scope.coffee = response.data;
    });

    $http.get('/data/additives.json').then(function(response){
        $scope.additives = response.data;
    });

    $scope.zoomItem = function (item) {
        $scope.currentZoomItem = item;
    };

    $scope.hideZoomItem = function () {
        $scope.currentZoomItem = '';
    };

    $scope.chooseAdditive = function (additive) {
        var index = $scope.choosenAdditives.indexOf(additive.combined);
        if (index > 0){
            $scope.choosenAdditives = $scope.choosenAdditives.substring(0, index) + $scope.choosenAdditives.substring(index + additive.combined.length);
        } else {
            $scope.choosenAdditives += " " + additive.combined;
        }
    };
    /*TODO:: Attach filtered array to checkbox */
    $scope.filterBy = ['Milk', 'Sugar', 'Alcohol'];
    $scope.filteredCoffee = function () {
        return $scope.coffee.filter(function (item) {
            return $scope.filterBy.indexOf(item.combined[0].taste) !== -1;
        });
    };
}]);