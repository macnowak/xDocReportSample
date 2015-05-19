var searchEngineControllers = angular.module('searchEngineControllers');

searchEngineControllers.controller('searchCtrl', ['$scope','$filter','$rootScope','SearchService',
    function ($scope,$filter,$rootScope,SearchService) {

        $scope.msg = "asd";

        $scope.pdf = SearchService.pdf();

        $scope.getPDF = function() {
            var service = new SearchService();
                            service.$pdf({},function(successResponse) {
                                    console.log(successResponse);
                                    saveAs(successResponse.response, 'filename.pdf');
                                },
                            function(error) {
                                console.log(error);
                            })
        }


    }]);
