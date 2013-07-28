App.Router.map(function() {
	this.resource("bookmarks", function() { 					// bookmarks
		this.route("new"); 										// bookmarks/new
	});
	this.route("bookmark", { path: "/bookmarks/:bookmark_id"});	// bookmarks/<id>
});