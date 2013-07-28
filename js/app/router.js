App.Router.map(function() {
	this.resource("about", function() {
		this.route("team");
	})
	this.route("contact");
	this.route("bookmarks");
	this.route("bookmark", { path: "/bookmarks/:bookmark_id"});
});