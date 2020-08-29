var app = angular.module('App');

app.directive('ngDetailProduct', function () {
	return {
		restrict: 'E',
		templateUrl: './assets/directives/partials/detailProduct.html',
		controller: 'DetailProductController',
	};
});
