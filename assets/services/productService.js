var app = angular.module('App');

app.factory('productService', [
	'$http',
	'$q',
	function ($http, $q) {
		function allProducts() {
			let deferred = $q.defer();

			$http.get('./assets/data/products.json').then(function (data) {
				deferred.resolve(data);
			});

			return deferred.promise;
		}
		return {
			allProducts: allProducts,
		};
	},
]);
