'use strict';

/* Services */
angular.module('MainAppServices', [])
    .factory('mainAppServices', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
        var service = {};
        var promise;

        service.fetchArtData = function () {
            var art = $http.get("http://angular.shaunbloom.com/data/art.json");
            //var art = $http.get("../../data/art.json");
            
            var promise =  $q.all([art]).then(function(results) {
                return {
                    art: results[0].data
                };
            });
           return promise;
        };

        return service;
    }]);