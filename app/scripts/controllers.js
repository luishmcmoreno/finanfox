'use strict';
angular.module('Finanfox.controllers', [])

.controller('AppCtrl', function($scope, financas) {

	$scope.monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
		'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

});