app.controller('EditController', [
    '$scope',
    '$stateParams',
    '$state',
    'API',

    function ($scope, $stateParams, $state, API) {

        $scope.link = _.find(API.links, function(e){ return e.id == $stateParams.id; });

        $scope.editLink = function (link) {
            API.update(link).then(function () {
                $state.go('home');
            });
        };

        $scope.decrementRating = function () {
            $scope.link.rating -= 1;
        };

    }]);