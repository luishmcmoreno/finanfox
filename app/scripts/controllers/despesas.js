'use strict';

/**
 * @ngdoc function
 * @name Finanfox.controller:DespesasCtrl
 * @description
 * # DespesasCtrl
 * Controller of the Finanfox
 */
angular.module('Finanfox').controller('DespesasCtrl', function ($scope, $ionicModal, financas) {

	$scope.month = 0;
	financas.despesas.get();

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

	$ionicModal.fromTemplateUrl('add-despesa.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.addDespesaModal = modal;
	});

	$scope.showAddDespesa = function() {
		$scope.addDespesaModal.show();
	};

	$scope.despesa = {};

	$scope.addDespesa = function () {
		var category = $scope.categories[$scope.category.chosen].text;

		if (typeof($scope.despesa.date) !== 'object') {
			$scope.despesa.date = new Date();
			$scope.despesa.date.setMonth(2);
		}

		$scope.despesa._id = new Date().getTime();
		$scope.despesa._id += '';
		$scope.despesa.category = category;

		financas.despesas.add($scope.despesa);

		$scope.despesa = {};

		$scope.addDespesaModal.hide();
	};

	$scope.category = {};
	$scope.category.chosen = false;

	$scope.categories = [
		{id: 0, text: 'Alimentação'},
		{id: 1, text: 'Educação'},
		{id: 2, text: 'Habitação'},
		{id: 3, text: 'Lazer'},
		{id: 4, text: 'Saúde'},
		{id: 5, text: 'Transporte'}
	];

	$scope.$on('financas.despesas.updated', function (event, docs) {
		$scope.$apply(function () {
			$scope.despesas = docs;
		});
	});

	$scope.getTotal = function () {
		var sum = 0;
		for (var r in $scope.despesas) {
			var receita = $scope.despesas[r].doc;
			if (receita.date.getMonth() === $scope.currentMonth) {
				sum += receita.value;
			}
		}
		return sum;
	};


});
