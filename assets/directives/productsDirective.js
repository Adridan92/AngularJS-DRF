var app = angular.module('App');

app.directive('ngProduct', function () {
	return {
		restrict: 'E',
		templateUrl: './assets/directives/partials/singleProduct.html',
		scope: {
			name: '@name',
			img: '@img',
			description: '@description',
			price: '@price',
			id: '@id',
		},
		controller: 'ProductController',
	};
});
