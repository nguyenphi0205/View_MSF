(function () {
    'use strict';

    angular.module('msf.pages.configuration',[])
        .constant('Url', {
            'backendURL': 'http://localhost:8081/msf'
        })
        .constant('backendController', {
            'upload': '/file/upload'
        })

})();