(function () {
	var directiveModule = angular.module('store-products', [ ]);

	// Product Title Custom Directive (Attribute)
	directiveModule.directive('productTitle', function () {
		return {
			// Type of directive (A for attribute)
			restrict: 'A',
			// URL of the template
			templateUrl: '../../Directives/CustomDirectives/product-title.html'
		};
	});

	// Product Title Custom Directive (Element)
	directiveModule.directive('productTitle', function () {
		return {
			// Type of directive (E for element)
			restrict: 'E',
			// URL of the template
			templateUrl: '../../Directives/CustomDirectives/product-title.html'
		}
	});

	// Product Panels Custom Directive (Element)
	directiveModule.directive('productPanels', function () {
		return {
			restrict: 'E',
			templateUrl: '../../Directives/CustomDirectives/product-panels.html',
			controller: function () {
				this.tab = 1;
				this.selectTab = function (setTab) {
					this.tab = setTab;
				};
				this.isSelected = function (checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

	// Product Gallery Custom Directive (Element)
	directiveModule.directive('productGallery', function () {
		return {
			restrict: 'E',
			templateUrl: '../../Directives/CustomDirectives/product-gallery.html'
		};
	});

})();