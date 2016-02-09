'use strict';

angular.module('phipsterApp')
    .factory('Space', function ($resource, DateUtils) {
        return $resource('api/spaces/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'addMessage': { method: 'POST', isArray: false, url: 'api/spaces/:id/mensajes'},
            'update': { method:'PUT' },
            'checkMessage': {method: 'GET', isArray: false, url: '/spaces/{id}/mensajes'}
        });
    });
