(function () {

	// Top-level module attached via ng-app.
	var directiveModule = angular.module('store', ['store-products']);

	// Store Controller
	directiveModule.controller('StoreController', ['$http', function ($http) {
		var store = this;
		store.products = [ ];
		$http.get('../../Data/products.json').success(function (data) {
			store.products = data;
		});
	}]);

	// Review Controller
	directiveModule.controller('ReviewController', function () {
		this.review = {};

		this.addReview = function (product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	// Gems array
	var gems = []
})();