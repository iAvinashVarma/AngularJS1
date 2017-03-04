angular.module("NoteWrangler")
.controller("NoteEditController", function ($scope, $routeParams, Note) {
	$scope.note = Note.get({ id: $routeParams.id });
	$scope.updateNote = function (note) {
		$scope.errors = null;
		$scope.updating = true;
		note.$update().catch(function (note) {
			$scope.errors = [note.data.error];
		}).finally(function () {
			$scope.updating = false;
		});
	};
});