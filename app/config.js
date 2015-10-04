app.config([
    '$stateProvider',
    '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: './app/home.html',
                controller: 'HomeController',
                resolve: {
                    linkPromise: ['API', function (API) {
                        return API.getAll();
                    }]
                }
            })
            .state('edit', {
                url: '/links/{id}',
                templateUrl: './app/edit.html',
                controller: 'EditController'
            })
            .state('new', {
                url: '/new',
                templateUrl: './app/new.html',
                controller: 'NewController'
            });

        $urlRouterProvider.otherwise('home');

    }]);