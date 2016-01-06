'use strict';

angular.module('phipsterApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


