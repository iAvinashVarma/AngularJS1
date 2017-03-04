//Factory Service

angular.module("NoteWrangler")
.factory("Gravatar", function GravatarFactory() {
	var avatarSize = 80; // Default Size
	var avatarUrl = "http://www.gravatar.com/avatar/";
	return function(email) {
		//generate: function (email) { Simplify as this service is containing only one function.
			return avatarUrl + CryptoJS.MD5(email) + "?size=" + avatarSize.toString();
		//}
	};
});