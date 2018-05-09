(function() {
    'use strict';

    angular.module('msf.pages.configuration',[])
        .config(routeConfig);
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home-page');
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
        $stateProvider

        //define state
        //     .state('main', {
        //     url: '/trang-chu',
        //     title: 'Trang Chủ',
        //     templateUrl: 'app/pages/Templates/Logistics/Main_View_Refactor/Main.View.html',
        //     sidebarMeta: {
        //         icon: 'fa fa-home fa-lg',
        //         order: 0
        //     },
        //     data: {
        //         authorizedRoles: undefined
        //     },
        //     controller: 'PersonalMainController',
        //     controllerAs: 'mainCtrl',
        // })
        //end define state

        //add more states based on the above prototype
        .state('upload', {
            url: '/upload',
            title: 'upload',
            templateUrl: '/app/pages/Templates/upload/upload.view.html',
            controller:'uploadController',
            controllerAs:'UploadCtrl'
        })
    };
})();
/** end */