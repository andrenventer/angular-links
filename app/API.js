app.factory('API', [
    '$http',

    function ($http) {

        var url = 'http://think-a-doo.net/enterprise/api/chatroom/';

        var o = {};

        o.links = [];

        o.getAll = function () {
            return $http.get(url + '?by=rating&order=desc').success(function (data) {
                angular.copy(data, o.links);
                return data;
            });
        };

        o.create = function (link) {
            return $http.post(url, link).success(function (data) {
                return data;
            });
        };

        o.update = function (link) {
            return $http.put(url + link.id, link).success(function (data) {
                return data;
            });
        };

        o.delete = function (link) {
            return $http.delete(url + link.id).success(function (data) {
                o.getAll();
                return data;
            });
        };

        return o;

    }]);
