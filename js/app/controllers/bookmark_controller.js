App.BookmarkController = Ember.ObjectController.create({
	description: function() {
		return this.get("content.name") + " | " + this.get("content.url");
	}.property("content.name", "content.url")
});