app.controller('NewController', [
    '$scope',
    '$state',
    'API',

    function ($scope, $state, API) {

        $scope.link = {};

        $scope.addLink = function (link) {
            if (!link.description || link.description === '') {
                return;
            }
            API.create(link).then(function () {
                $state.go('home');
            });
            $scope.link = {};
        };

    }]);