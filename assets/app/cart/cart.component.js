angular.module('cartModule').component('cartItems', {
    templateUrl: 'assets/app/cart/cart.template.html',
    bindings: {
        cart: "="
    },
    controller: [
        'cartService',
        function (cartService) {
            var ctrl = this;
        }
    ],
});
