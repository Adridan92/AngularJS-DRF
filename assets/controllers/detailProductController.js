var app = angular.module('App');

app.controller('DetailProductController', [
	'$scope',
	'productService',
	function ($scope, productService) {
		$scope.product = {};

		$scope.getProduct = function (id) {
			productService.getProduct(id).then(function (data) {
				$scope.product = data;
			});
		};

		$scope.getProduct(2);
	},
]);
