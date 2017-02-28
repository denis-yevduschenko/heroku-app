CofenatorApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.currentZoomItem = '';
    $scope.choosenAdditives = '';
    $scope.filterBy = [];
    $scope.typeOfCoffee = '';
    $scope.roast = '';
    $scope.cupSize = '';

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
            /*del string from result block*/
            $scope.choosenAdditives = $scope.choosenAdditives.substring(0, index) + $scope.choosenAdditives.substring(index + additive.combined.length);
            /*del additive from filter array*/
            arrayIndex = $scope.filterBy.indexOf(additive.combined);
            if (arrayIndex > -1) {
                $scope.filterBy.splice(arrayIndex, 1);
            }
        } else {
            /*add string to result block*/
            $scope.choosenAdditives += " " + additive.combined;
            /*add additive to filter array*/
            $scope.filterBy.push(additive.combined);
        }
    };
    /*TODO:: reduce counts of additives to 1 in coffee.json*/
    $scope.filteredCoffee = function () {
        return $scope.coffee.filter(function (item) {
            return $scope.filterBy.indexOf(item.combined[0].taste) !== -1;
        });
    };
}]);