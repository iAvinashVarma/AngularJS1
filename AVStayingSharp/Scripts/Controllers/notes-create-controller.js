// Below is old code.

//angular.module('NoteWrangler')
//.controller('NotesCreateController', function ($http) {
//var controller = this;
//this.saveNote = function (note) {
//	controller.error = null;
//	$http({ method: 'POST', url: '/notes', data: note })
//	.catch(function (note) {
//		controller.errors = note.data.error;6
//	})
//};

//});

// Below is the old code using Factory service (Notes.js).

angular.module("NoteWrangler")
.controller("NoteCreateController", function ($scope, Note) {
	$scope.saveNote = function (note) {
		$scope.errors = null;
		$scope.updating = true;
		Note.create(note)
		.catch(function (note) {
			$scope.errors = [note.data.error];
		}).finally(function () {
			$scope.updating = false;
		});
	};
});

angular.module("NoteWrangler")
.controller("NoteCreateController", function ($scope, Note) {
	$scope.note = new Note();
	$scope.saveNote = function (note) {
		$scope.errors = null;
		$scope.updating = true;
		note.$save(note)
		.catch(function (note) {
			$scope.errors = [note.data.error];
		}).finally(function () {
			$scope.updating = false;
		});
	};
});
