(function () {
    'use strict';
    angular.module('msf.pages.upload',[])
        .controller('uploadController', uploadController);

    uploadController.$inject = ['uploadService']

    function uploadController(uploadService) {
        var vm = this;
        var formData = new FormData();
        formData.append("file",file.files[0]);
        
        vm.uploadFiles = uploadService.uploadFiles(formData);
    }

})();