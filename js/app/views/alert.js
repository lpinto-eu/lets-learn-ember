App.AlertView = Ember.View.extend({
	templateName: "_alert"
	, tagName: "h3"
	, classNameBindings: ["defaultClass", "content.kind"]
	, defaultClass: "alert-box"
	, kind: null
	
	, click: function() {
		var current = this;
		this.$().fadeOut(500, function(){current.removeFromParent();});
	}
	
	, didInsertElement: function() {
		this.$().hide().fadeIn(500);
	}
});