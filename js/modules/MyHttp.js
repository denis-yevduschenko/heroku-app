var MyHttp = angular.module('MyHttp', []);

MyHttp.factory('MyHttpData', ['$http', function ($http) {
    var items = {};

    items.getCoffee = function () {
        return $http.get('/data/coffee.json');
    };

    items.getAdditives = function () {
        return $http.get('/data/additives.json');
    };

    return items;
}]);
