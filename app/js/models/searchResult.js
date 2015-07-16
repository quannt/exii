var app = app || {};

app.SearchResult = Backbone.Model.extend({
	defaults:{
		title:'',
		type:'',
		Url:''
	}
});