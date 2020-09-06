angular.module('product').component('productList', {
	templateUrl: 'assets/app/product/product-list.template.html',
	bindings: {
		cart: "="
	},
	controller: [
		'productService',
		'$cookies',

		function (productService, $cookies) {
			var ctrl = this;

			ctrl.allProducts = [];

			ctrl.getProducts = function () {
				productService.allProducts().then(function (response) {
					console.log(response);
					ctrl.allProducts = response.data;
				});
			};

			ctrl.addItem=function(item){
				ctrl.cart.push(item);
				var expireDate=new Date();
				expireDate.setDate(expireDate.getDate() + 1);
				$cookies.putObject('cart',ctrl.cart,{'expires':expireDate});
				console.log(ctrl.cart);

			};

			ctrl.getProducts();
		},
	],
});
