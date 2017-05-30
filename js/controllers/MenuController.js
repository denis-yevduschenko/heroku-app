(function (){
    'use strict';
    angular
        .module("CoffeenatorApp")
        .controller('MenuController', ['$window', MenuController]);

    function MenuController($window) {
        var mv = this;

        mv.reloadRoute = reloadRoute;

        function reloadRoute() {
            $window.location.reload();
        }
    }
})();