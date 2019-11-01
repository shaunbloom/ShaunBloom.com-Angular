'use strict';

/* Services */
angular.module('MainAppServices', [])
    .factory('mainAppServices', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
        var service = {};
        var promise;

    //     service.fetchUserData = function () {
    //         var users = $http.get("data/users.json"),
    //             logs = $http.get("data/logs.json");
            
    //         var promise =  $q.all([users, logs]).then(function(results) {
    //             return {
				// 	users: results[0].data,
				// 	logs: results[1].data
				// };
    //         });
    //        return promise;
    //     };

        service.processUserData = function (userData) {

        }
        return service;
    }]);