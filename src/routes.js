(function() {
    'use strict';

    angular.module('CakumPakum')
    .config(RoutesCofig);

    RoutesCofig.$inject = ['$stateProvider', '$urlRouterProvider']
    function RoutesCofig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

        // Home page
        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })
    }

})();