(function (){
    angular
        .module("CoffeenatorApp")
        .controller('MainController', ['$scope', '$location', 'MyHttpData', MainController]);

    function MainController($scope, $location, MyHttpData) {
        var vm = this;

        vm.currentZoomItem = '';
        vm.chosenAdditives = '';
        vm.filterBy = [];

        vm.coffee = '';
        vm.additives = '';
        getCoffee();
        getAdditives();

        vm.chooseAdditive = chooseAdditive;
        vm.zoomItem = zoomItem;
        vm.hideZoomItem = hideZoomItem;
        vm.filteredCoffee = filteredCoffee;

        function chooseAdditive(additive) {
            var index = vm.chosenAdditives.indexOf(additive.combined);
            if (index > 0){
                /*del string from result block*/
                vm.chosenAdditives = vm.chosenAdditives.substring(0, index) + vm.chosenAdditives.substring(index + additive.combined.length);
                /*del additive from filter array*/
                arrayIndex = vm.filterBy.indexOf(additive.combined);
                if (arrayIndex > -1) {
                    vm.filterBy.splice(arrayIndex, 1);
                }
            } else {
                /*add string to result block*/
                vm.chosenAdditives += " " + additive.combined;
                /*add additive to filter array*/
                vm.filterBy.push(additive.combined);
            }
        }

        function zoomItem(item) {
            vm.currentZoomItem = item;
        }

        function hideZoomItem() {
            vm.currentZoomItem = '';
        }

        function filteredCoffee() {
            return vm.coffee.filter(function (item) {
                return vm.filterBy.indexOf(item.combined[0].taste) !== -1;
            });
        }

        function getCoffee() {
            MyHttpData.getCoffee().then(function (coffee) {
                vm.coffee = coffee.data;
            });
        }

        function getAdditives() {
            MyHttpData.getAdditives().then(function (additives) {
                vm.additives = additives.data;
            });
        }
    }
})();