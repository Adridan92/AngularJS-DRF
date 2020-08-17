var app = angular.module('App');

app.directive('ngProduct', function () {
	return {
		restrict: 'E',
		templateUrl: './assets/directives/partials/singleProduct.html',
	};
});
