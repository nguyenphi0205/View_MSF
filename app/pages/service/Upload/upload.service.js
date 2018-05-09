(function() {
    'use strict';
    angular.module('msf.pages')
        .factory('uploadService', uploadService);

        uploadService.$inject = ['$http', 'Url', 'backendController'];

    /** @ngInject */
    function uploadService($http, Url, backendController) {
        return {
           uploadFiles: uploadFiles
        };

        function uploadFiles(formData) {
            $http.post(Url.backendURL + backendController.upload, formData, {
				transformRequest: function(data, headersGetterFunction) {
					return data;
				},
				headers: { 'Content-Type': undefined }
			}).success(function(data) {
				alert('Success');
			});

        }
       
    }
})();