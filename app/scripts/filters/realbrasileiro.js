'use strict';

/**
 * @ngdoc filter
 * @name Finanfox.filter:realbrasileiro
 * @function
 * @description
 * # realbrasileiro
 * Filter in the Finanfox.
 */

function formatReal(numb) {
	var textNumb = numb.toFixed(2);
	return textNumb;
}

angular.module('Finanfox').filter('brl', function() {
	return function(input) {
		return 'R$ ' + formatReal(input);
	};
});
