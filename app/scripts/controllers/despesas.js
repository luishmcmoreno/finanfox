'use strict';

/**
 * @ngdoc function
 * @name Finanfox.controller:DespesasCtrl
 * @description
 * # DespesasCtrl
 * Controller of the Finanfox
 */
angular.module('Finanfox').controller('DespesasCtrl', function ($scope) {

	$scope.month = 0;

	$scope.$watch('month', function (nv) {
		var currentMonth = new Date().getMonth();
		var date = new Date();
		date.setMonth(currentMonth + nv);
		$scope.currentMonth = date.getMonth();
		$scope.currentYear = date.getFullYear();
	});

	$scope.incMonth = function () {
		$scope.month++;
	};

	$scope.decMonth = function () {
		$scope.month--;
	};

});
