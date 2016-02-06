'use strict';

angular.module('phipsterApp')
    .controller('SpaceDetailController', function ($scope, $rootScope, $stateParams, DataUtils, entity, Space, Mensaje) {
        $scope.space = entity;
        $scope.load = function (id) {
            Space.get({id: id}, function(result) {
                $scope.space = result;
            });
        };
        var unsubscribe = $rootScope.$on('phipsterApp:spaceUpdate', function(event, result) {
            $scope.space = result;
        });
        $scope.$on('$destroy', unsubscribe);

        $scope.byteSize = DataUtils.byteSize;
    });
