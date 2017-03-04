agnular.module("NoteWrangler")
.directive("nwCategorySelect", function (category) {
	return {
		replace: true,
		restrict: "E",
		scope: {
			activeCategory : "="
		},
		templateUrl: "/Templates/Directives/nw-category-select.html",
		controller: function ($scope) {
			return $scope.activeCategory;
		},
	};
	this.setActiveCategory = function (category) {
		return this;
	}

	scope.categoryActive = function () {
		return nwCategorySelectCtrl.getActiveCategory() === scope.category.name;
	}
});