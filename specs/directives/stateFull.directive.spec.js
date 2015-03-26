/*
* In order to ...
* as a ...
* I need to ...
*/

describe('StateFull test', function() {

	var stateFullDirective,
		simpleHtml = '<button ng-state-full="test-value"></button>',
		element;
		
	this.$rootScope;

	beforeEach(function(){
		angular.mock.module('angular_test');

		angular.mock.inject(function ($compile, $rootScope){
			element = $compile(simpleHtml)($rootScope);
		});
	});

	describe('I will test stateFull directive', function() {

		it('Should add a class if missing otherwise add it', function() {
			expect(element.hasClass('test-value')).toBeFalsy();
			element.triggerHandler('click');
			expect(element.hasClass('test-value')).toBeTruthy();
		});


	});
});