var searchEngineControllers = angular.module('searchEngineControllers');

searchEngineControllers.controller('searchCtrl', ['$scope','$filter','$rootScope','SearchService',
    function ($scope,$filter,$rootScope,SearchService) {

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


        $scope.getDOCX = function() {
                    var service = new SearchService();
                                    service.$docx({},function(successResponse) {
                                            console.log(successResponse);
                                        },
                                    function(error) {
                                        console.log(error);
                                    })
                }



    }]);
