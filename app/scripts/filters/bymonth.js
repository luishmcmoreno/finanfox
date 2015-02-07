'use strict';

/**
 * @ngdoc filter
 * @name Finanfox.filter:bymonth
 * @function
 * @description
 * # bymonth
 * Filter in the Finanfox.
 */
angular.module('Finanfox').filter('bymonth', function () {
	return function (items, month) {
		var arrayToReturn = [];
		if (!items) return;
		for (var i = 0; i < items.length; i++) {
			var dt = items[i].doc.date;
			if (dt.getMonth() === month) {
				arrayToReturn.push(items[i]);
			}
		}
		
		return arrayToReturn;
  	};
});
