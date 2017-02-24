(function(){
    var CofenatorApp = angular.module("CofenatorApp", [])
        .controller("coffeeCtrl", function($scope, $http ){
            $http.get('/data/coffee.json').then(function(response){
                $scope.coffee = response.data;
            });

            $scope.zoomItem = function (item) {
                $scope.currentZoomItem = item;
            };

            $scope.hideZoomItem = function () {
                $scope.currentZoomItem = '';
            };
        });
})();