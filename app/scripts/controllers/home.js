'use strict';

/**
 * @ngdoc function
 * @name Finanfox.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the Finanfox
 */
angular.module('Finanfox').controller('HomeCtrl', function ($scope, financas) {
	$scope.month = 0;

	$scope.$watch('month', function (nv) {
		var currentMonth = new Date().getMonth();
		var date = new Date();
		date.setMonth(currentMonth + nv);
		$scope.currentMonth = date.getMonth();
		$scope.currentYear = date.getFullYear();
	});

	$scope.receita = 0;
	$scope.despesa = 0;


	financas.receitas.get();
	financas.despesas.get();

	$scope.$on('financas.receitas.updated', function (event, docs) {
		$scope.$apply(function () {
			$scope.receitas = docs;
			$scope.receita = $scope.getReceitasTotal();
		});
	});

	$scope.$on('financas.despesas.updated', function (event, docs) {
		$scope.$apply(function () {
			$scope.despesas = docs;
			$scope.despesa = $scope.getDespesasTotal();
		});
	});


	$scope.getReceitasTotal = function () {
		var sum = 0;
		for (var r in $scope.receitas) {
			var receita = $scope.receitas[r].doc;
			if (receita.date.getMonth() === $scope.currentMonth) {
				sum += receita.value;
			}
		}
		return sum;
	};

	$scope.getDespesasTotal = function () {
		var sum = 0;
		for (var r in $scope.despesas) {
			var despesa = $scope.despesas[r].doc;
			if (despesa.date.getMonth() === $scope.currentMonth) {
				sum += despesa.value;
			}
		}
		return sum;
	};

});
