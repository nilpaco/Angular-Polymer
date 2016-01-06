 'use strict';

angular.module('phipsterApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-phipsterApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-phipsterApp-params')});
                }
                return response;
            }
        };
    });
