var app = app || {};

app.Podcast = Backbone.Model.extend({
	defaults:{
		title:'',
		link:'',
		description:'',
		duration:0


	}
});