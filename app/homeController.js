app.controller('HomeController', [
    '$scope',
    '$sce',
    'API',

    function ($scope, $sce, API) {

        $scope.links = API.links;

        $scope.reload = function () {
            API.getAll();
        };

        $scope.deleteLink = function (link) {
            API.delete(link);
        };

        $scope.incrementVotes = function (link) {
            link.votes += 1;
            API.update(link);
        };

        $scope.search = '';

        $scope.clearFilter = function () {
            $scope.search = '';
        };

    }]);

app.filter('dataFilter', [function () {

    return function (links, searchText) {

        var regexp = new RegExp(searchText, 'i');

        return links.filter(function (link) {
            var found = false;
            Object.keys(link).some(function (key, val) {
                var match = regexp.exec(link[key]);
                if (match !== null) {
                    found = true;
                }
                return found;
            });
            return found;
        });
    };
}]);