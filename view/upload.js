var app = angular.module('myapp', []);

app.controller('uploadcontroller',function($scope,$http){
    // $scope.uploadFile = function () {
    //     var uploadUrl = "http://localhost:8081/msf" + '/file/upload';
    //     var formData = new FormData();
    //     formData.append("file", file.files[0]);
    //     $http.post(uploadUrl, formData, {
    //         transformRequest: function (data, headersGetterFunction) {
    //             return data;
    //         },
    //         headers: { 'Content-Type': undefined }
    //     }).success(function () {
    //         alert('Success');
    //     }).error(function () {
    //         alert("Error ... ");
    //     });
    // };

    $scope.uploadFile=function (){
        var uploadUrl = "http://localhost:8081/msf/file/upload";
        //var postData=angular.toJson($scope.formModel,true);
        var formData=new FormData();
        formData.append("file",file.files[0]);
        $http.post(uploadUrl, formData, {
            transformRequest: function(data, headersGetterFunction) {
                return data;
            },
            headers: { 'Content-Type': undefined}
            }).then(function(respone) {
                alert("Success ... " + status);
            })
        
        };
});

