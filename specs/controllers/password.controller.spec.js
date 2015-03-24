/*
* In order to ...
* as a ...
* I need to ...
*/

describe('In order to ckeck the strength of my password as a visitor I need to see the strong message on the screan', function() {
	var passwordController;
	var $scope;

	beforeEach(function(){
		angular.mock.module('angular_test');

		angular.mock.inject(function ($controller, $rootScope){
			$scope = $rootScope.$new();
		

		passwordController = $controller('passwordController', {$scope: $scope});

		});
	});

	describe('I will test grade method', function() {

		it('Should the password be weak when i type 12345', function() {
			//GIVEN
			$scope.password = '12345';
			//AND
			$scope.grade();
			//THEN
			expect($scope.strength).toEqual('weak');
		});

		it('Should the password be strong when i type @qsdqdqs_qsdq09', function() {
			//GIVEN
			$scope.password = '@qsdqdqs_qsdq09';
			//AND
			$scope.grade();
			//THEN
			expect($scope.strength).toEqual('strong');
		});
		

	});
});