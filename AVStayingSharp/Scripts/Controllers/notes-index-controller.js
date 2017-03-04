angular.module('NoteWrangler')
.controller('NotesIndexController', function ($scope, Note) {
	// Below is the old code using Factory service (Notes.js).

	//Note.all()
	//.success(function (data) {
	//	$scope.notes = data;
	//});

	// Below is the new code using ngResource
	$scope.notes = Note.query();
});