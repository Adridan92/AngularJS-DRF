var app = angular.module('App', ['ngRoute', 'product', 'user', 'cartModule','ngCookies']);



app.controller('MainController', ['$scope','$cookies',function($scope,$cookies){
	$scope.title="Hola mundo";

	$scope.shoppingCart=[];

	if (!angular.isUndefined($cookies.getObject('cart'))) {
			 $scope.shoppingCart=$cookies.getObject("cart");
	}

}]);

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
