angular.module('app').filter('getFirstLetter', function () {
	return function (string) {
		return string ? string.toUpperCase().split('').shift() : "";
	}
});


angular.module('app').filter('pagination', function() {
	return function(input, start) {
    	start = parseInt(start, 10);
    	return input ? input.slice(start) : [];
  	};
});

angular.module('app').filter('formatCurrency', function() {
	return function(amount) {
    	return "$" + numeral(amount).format('0,0');
  	};
});