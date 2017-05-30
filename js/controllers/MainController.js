(function (){
    angular
        .module("CoffeenatorApp")
        .controller('MainController', ['$scope', '$http', '$location', 'MyHttpData', function($scope, $http, $location, MyHttpData) {
            $scope.currentZoomItem = '';
            $scope.chosenAdditives = '';
            $scope.filterBy = [];
            $scope.typeOfCoffee = '';
            $scope.roast = '';
            $scope.cupSize = '';

            $scope.coffee = '';
            $scope.additives = '';
            getCoffee();
            getAdditives();

            function getCoffee() {
                MyHttpData.getCoffee().then(function (coffee) {
                    $scope.coffee = coffee.data;
                });
            }

            function getAdditives() {
                MyHttpData.getAdditives().then(function (additives) {
                    $scope.additives = additives.data;
                });
            }

            $scope.zoomItem = function (item) {
                $scope.currentZoomItem = item;
            };

            $scope.hideZoomItem = function () {
                $scope.currentZoomItem = '';
            };

            $scope.chooseAdditive = function (additive) {
                var index = $scope.chosenAdditives.indexOf(additive.combined);
                if (index > 0){
                    /*del string from result block*/
                    $scope.chosenAdditives = $scope.chosenAdditives.substring(0, index) + $scope.chosenAdditives.substring(index + additive.combined.length);
                    /*del additive from filter array*/
                    arrayIndex = $scope.filterBy.indexOf(additive.combined);
                    if (arrayIndex > -1) {
                        $scope.filterBy.splice(arrayIndex, 1);
                    }
                } else {
                    /*add string to result block*/
                    $scope.chosenAdditives += " " + additive.combined;
                    /*add additive to filter array*/
                    $scope.filterBy.push(additive.combined);
                }
            };

            $scope.filteredCoffee = function () {
                return $scope.coffee.filter(function (item) {
                    return $scope.filterBy.indexOf(item.combined[0].taste) !== -1;
                });
            };
        }]);
})();