'use strict';

angular.module('phipsterApp').controller('SpaceDialogController',
    ['$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Space',
        function($scope, $stateParams, $uibModalInstance, DataUtils, entity, Space) {

        $scope.space = entity;
        $scope.load = function(id) {
            Space.get({id : id}, function(result) {
                $scope.space = result;
            });
        };

        var onSaveSuccess = function (result) {
            $scope.$emit('phipsterApp:spaceUpdate', result);
            $uibModalInstance.close(result);
            $scope.isSaving = false;
        };

        var onSaveError = function (result) {
            $scope.isSaving = false;
        };

        $scope.save = function () {
            $scope.isSaving = true;
            if ($scope.space.id != null) {
                Space.update($scope.space, onSaveSuccess, onSaveError);
            } else {
                Space.save($scope.space, onSaveSuccess, onSaveError);
            }
        };

        $scope.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.abbreviate = DataUtils.abbreviate;

        $scope.byteSize = DataUtils.byteSize;

        $scope.setImg = function ($file, space) {
            if ($file && $file.$error == 'pattern') {
                return;
            }
            if ($file) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL($file);
                fileReader.onload = function (e) {
                    var base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
                    $scope.$apply(function() {
                        space.img = base64Data;
                        space.imgContentType = $file.type;
                    });
                };
            }
        };
}]);
