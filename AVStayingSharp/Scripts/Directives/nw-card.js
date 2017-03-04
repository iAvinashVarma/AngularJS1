angular.module("NoteWrangler")
.directive("nwCard", function () {
	var num = 1;
	return {
		restrict: "E",
		templateUrl: "Templates/Directives/nw-card.html",
		scope: {},
		controller: function ($scope) {
			$scope.header = "Note Title " + num++;
		}
	};
});