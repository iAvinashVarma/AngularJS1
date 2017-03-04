angular.module("NoteWrangler")
.directive("nwCategoryItem", function () {
	return {
		restrict: "E",
		templateUrl: "/Templates/Directives/nw-category-item.html",
		scope: {
			category: "="
		},
		require: "^nwCategorySelect",
		link: function (scope, element, attrs, newCategorySelectCtrl) {
			scope.makeActive = function () {
				nwCategorySelectCtrl.setActiveCategory(scope.category);
			}
		}
	};
});