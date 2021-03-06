'use strict';

describe('Controller Tests', function() {

    describe('Space Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockSpace, MockMensaje;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockSpace = jasmine.createSpy('MockSpace');
            MockMensaje = jasmine.createSpy('MockMensaje');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Space': MockSpace,
                'Mensaje': MockMensaje
            };
            createController = function() {
                $injector.get('$controller')("SpaceDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'phipsterApp:spaceUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
