(function() {
    'use strict';
    angular
        .module('MyHttp', [])
        .factory('MyHttpData', ['$http', MyHttpData]);

        function MyHttpData($http) {
            var items = {};

            items.getCoffee = function () {
                return $http.get('/data/coffee.json');
            };

            items.getAdditives = function () {
                return $http.get('/data/additives.json');
            };

            return items;
        }
})();