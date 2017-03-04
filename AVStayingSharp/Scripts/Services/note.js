// Using $resource is same as "X:\TestClient\Web\AngularJS1\AVStayingSharp\Scripts\Services\notes.js"

angular.module("NoteWrangler")
.factory("Note", function NoteFactory($resource) {
	return $resource("/notes/:id", {}, {}, {
		update: {
			method: "PUT"
		}
	});
});