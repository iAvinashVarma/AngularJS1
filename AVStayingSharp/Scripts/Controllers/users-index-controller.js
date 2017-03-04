angular.module("NoteWrangler")
.controller("UserIndexController", function ($scope, Gravatar) {
	$scope.gravatarUrl = function (email) {
		return Gravatar(email);
	}
})