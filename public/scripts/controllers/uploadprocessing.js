/**
 * Created by SANTOSH on 11/3/2016.
 */
/**
 * Created by SANTOSH on 11/2/2016.
 */
'use strict';

angular.module('smartAdminApp')
    .controller('UploadProcessingCtrl', function($scope,$http) {

        $scope.isLoading = true;
        $scope.getUploads = function () {
            $scope.isLoading = true;
            var apiUrl = "/api/v1/upload"
            var query = {
                limit: 10,
                page: 1,
                sortBy: "originalFileName"

            }
            $scope.uploadsList = [];

            $http.get(apiUrl, { params: query }).then(function (response) {
                $scope.uploadsList = response.data.results;
                $scope.currentPage = response.data.current;
                $scope.perPage = response.data.options.perPage;
                $scope.totalPages = response.data.last;
                $scope.totalRecords = response.data.count;
                $scope.isLoading = false;

            });


        }
        $scope.getUploads();


    });
