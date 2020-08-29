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

		function getProduct(id) {
			let deferred = $q.defer();
			$http.get('./assets/data/products.json').then(function (data) {
				let result = data['data'].filter((product) => product['id'] == id);

				if (result.length > 0) {
					deferred.resolve(result[0]);
				} else {
					deferred.resolve({});
				}
			});

			return deferred.promise;
		}

		return {
			allProducts: allProducts,
			getProduct: getProduct,
		};
	},
]);
