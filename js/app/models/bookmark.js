App.Bookmark = DS.Model.extend({
	title:	DS.attr("string"),
	url:	DS.attr("string"),
	favorite: DS.attr("boolean"),
	
	changeFavorite: function() {
		this.get("transaction").commit();
		console.log("transaction was commited.")
	}.observes("favorite")
});
