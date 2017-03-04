angular.module("NoteWrangler")
.controller("NoteDeleteController", function ($scope, Note) {
	$scope.deleteNote = function (note) {
		Note.$delete(note);
	};
});