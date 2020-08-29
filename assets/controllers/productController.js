var app = angular.module('App');

app.controller('ProductController', [
	'$scope',
	'productService',
	function ($scope, productService) {
		$scope.allProducts = [];

		$scope.init = function () {
			$scope.getProducts();
		};

		$scope.getProducts = function () {
			productService.allProducts().then(function (response) {
				console.log(response);
				$scope.allProducts = response.data;
			});
		};

		$scope.addItem = function (id) {
			alert(id);
		};
	},
]);
