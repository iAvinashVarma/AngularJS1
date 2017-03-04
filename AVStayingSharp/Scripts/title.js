angular.module("NoteWrangler")
.directive("title", function ($timeout) {
	//return {
	//	link: function (scope, element) {

	//	}
	//};

	// Can also use Anonymous function, instead of the above function.
	return function (scope, element) {
		$timeout(function () {
			element.tooltip({ container: "body" });
		});
		scope.$on('$destroy', function () {
			element.tooltip('destroy');
		});
	};
});