window.App = Ember.Application.create();

App.Store = DS.Store.extend({
	revison: 13
	, adapter: "DS.FixtureAdapter"
});