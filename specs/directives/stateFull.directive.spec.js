/*
* In order to ...
* as a ...
* I need to ...
*/

describe('StateFull test', function() {

	var stateFullDirective,
		simpleHtml = '<div ng-state-full></div>',
		element;
		
	this.$rootScope;

	beforeEach(function(){
		angular.mock.module('angular_test');

		angular.mock.inject(function ($filter, $rootScope){
	
			element = $compile(simpleHtml)($rootScope);
			this.$rootScope = $rootScope;

		});
	});

	describe('I will test stateFull directive', function() {

		it('Should add a class if missing otherwise add it', function() {
			expect(element.hasClass('test-value')).toBeFalsy();
			expect(false).toBeTruthy();
			expect(element.hasClass('test-value')).toBeTruthy();
		});


	});
});