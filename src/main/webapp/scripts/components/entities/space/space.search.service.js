'use strict';

angular.module('phipsterApp')
    .factory('SpaceSearch', function ($resource) {
        return $resource('api/_search/spaces/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
