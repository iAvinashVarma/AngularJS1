angular.module("NoteWrangler")
.factory("Note", ['$http', function NoteFactory($http) {
	return {
		all: function () {
			return $http({ method: "GET", url: "/notes" });
		},
		find: function (id) {
			return $http({ method: "GET", url: "/notes" + id });
		},
		create: function (noteobj) {
			return $http({ method: "POST", url: "/notes", data: note });
		}
	}
}]);