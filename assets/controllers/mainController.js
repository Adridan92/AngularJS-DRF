var app = angular.module('App', ['ngRoute', 'product', 'user', 'cartModule']);

app.controller('MainController', [
	'$scope',
	function ($scope) {

		$scope.shoppingCart = [];
		$scope.title = 'Hola mundo';
	},
]);

app.config([
	'$routeProvider',
	function ($routeProvider) {
		$routeProvider
			.when('/', { template: '<product-list cart="shoppingCart"  class="row"></product-list>' })
			.when('/user', { template: '<user-profile class="row"></user-profile>' })
			.when('/:id', { template: '<product-detail></product-detail>' })
			.otherwise('/');
	},
]);
