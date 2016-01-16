'use strict';

angular.module('phipsterApp')
    .controller('MainController', function ($scope, Principal, Space) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;

        });
        $scope.search = function () {
            SpaceSearch.query({query: $scope.searchQuery}, function(result) {
                $scope.spaces = result;
            }, function(response) {
                if(response.status === 404) {
                    $scope.loadAll();
                }
            });
        };

    });
