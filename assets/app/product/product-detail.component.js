angular.module('product').component('productDetail', {
	templateUrl: 'assets/app/product/product-detail.template.html',
	controller: [
		'productService',
		'$routeParams',
		function (productService, $routeParams) {
			var ctrl = this;
			var idParam = $routeParams.id;

			ctrl.product = {};

			ctrl.getProduct = function (id) {
				productService.getProduct(id).then(function (data) {
					ctrl.product = data;
				});
			};

			ctrl.getProduct(idParam);
		},
	],
});
