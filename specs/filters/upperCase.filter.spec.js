/*
* In order to ...
* as a ...
* I need to ...
*/

describe('In order to set the letters in the...', function() {

	var upperCaseFilter;

	beforeEach(function(){
		angular.mock.module('angular_test');

		angular.mock.inject(function ($filter){
	
			upperCaseFilter = $filter('upperCase');

		});
	});

	describe('I will test grade method', function() {

		it('Should set the letters in the right way', function() {
			expect(upperCaseFilter('JosIMar lOPEra')).toEqual('Josimar Lopera');
			expect(upperCaseFilter('lOPEra')).toEqual('Lopera');
			expect(upperCaseFilter('PARIS')).toEqual('Paris');
		});


	});
});