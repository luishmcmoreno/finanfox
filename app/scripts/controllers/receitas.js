'use strict';

/**
 * @ngdoc function
 * @name Finanfox.controller:ReceitasCtrl
 * @description
 * # ReceitasCtrl
 * Controller of the Finanfox
 */
angular.module('Finanfox').controller('ReceitasCtrl', function ($scope, $ionicModal, financas) {
	
	$scope.month = 0;
	financas.receitas.get();

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

	$ionicModal.fromTemplateUrl('add-receita.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.addReceitaModal = modal;
	});

	$scope.showAddReceita = function() {
		$scope.addReceitaModal.show();
	};

	$scope.receita = {};

	$scope.addReceita = function () {
		var category = $scope.categories[$scope.category.chosen].text;

		if (typeof($scope.receita.date) !== 'object') {
			$scope.receita.date = new Date();
			$scope.receita.date.setMonth(2);
		}

		$scope.receita._id = new Date().getTime();
		$scope.receita._id += '';
		$scope.receita.category = category;

		financas.receitas.add($scope.receita);

		$scope.receita = {};

		$scope.addReceitaModal.hide();
	};

	$scope.category = {};
	$scope.category.chosen = false;

	$scope.categories = [
		{id: 0, text: 'Salário'},
		{id: 1, text: 'Prêmios'},
		{id: 2, text: 'Investimentos'},
		{id: 3, text: 'Outros'}
	];

	$scope.$on('financas.receitas.updated', function (event, docs) {
		$scope.$apply(function () {
			$scope.receitas = docs;
		});
	});

	$scope.getTotal = function () {
		var sum = 0;
		for (var r in $scope.receitas) {
			var receita = $scope.receitas[r].doc;
			if (receita.date.getMonth() === $scope.currentMonth) {
				sum += receita.value;
			}
		}
		return sum;
	};

});
