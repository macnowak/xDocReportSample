var services = angular.module('searchEngineServices');

services.factory('SearchService', function($resource) {
    return $resource('reporting/main/download/:type', {},
        {
           pdf: {
                method: 'GET',
                params: {'type':'pdf'},
                headers: {
                    accept: 'application/pdf'
                },
                responseType: 'arraybuffer',
                cache: true,
                transformResponse: function (data) {
                    var pdf;
                    if (data) {
                        pdf = new Blob([data], {
                            type: 'application/pdf'
                        });
                        saveAs(pdf, 'filename.pdf');
                    }
                    return {
                        response: pdf

                    };
                }
            }
        }
    );
});