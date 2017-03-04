angular.module('NoteWrangler')
.controller('NotesShowController', function ($http, $routeParams, Note) {
	// Below is the old code.

	//$http({ method: 'GET', url: '/notes/' + $routeParams.id }).
	//success(function (data) {
	//	controller.note = data;
	//});

	// Below is the new code after using ngResource.

	Note.find($routeParams.id).success(function (data) {
		$scope.note = Note.get({ id: $routeParams.id });
	});
});