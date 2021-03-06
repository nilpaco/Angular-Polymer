'use strict';

angular.module('phipsterApp')
    .controller('SpaceDetailController', function ($scope, $rootScope, $stateParams, DataUtils, entity, mensajes, Space, Mensaje) {
        $scope.space = entity;
        $scope.mensajes = mensajes;
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

        $scope.addMessage = function (){
            Space.addMessage({id:$scope.space.id}, {text:$scope.texto});
        }
    });
