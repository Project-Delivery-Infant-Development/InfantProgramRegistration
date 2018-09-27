
import './facilitators.html';
import '../Others/routes.js';
import '../Others/feed.js';

Meteor.subscribe("crud");

Template.data.events({
	'submit form':function(e){
		e.preventDefault();
		var title=e.target.title.value;//get value from field title
		var description=e.target.description.value;//get value from field description
		var obj={
			title:title,
			description:description
		}
		if(this._id){
			//update data
			Meteor.call('update',this._id,obj);
			Router.go('/');
		}else{
			//insert data
			Meteor.call('insertCrud',obj);
		}
		e.target.title.value="";//clear form
		e.target.description.value="";//clear form
	},
	'click #remove':function(e){
		e.preventDefault();
		var result=confirm('Do you want to delete?');
		if(result){
			crud.remove(this._id);
		}
		
		
	}
})
Template.data.helpers({
	getData:function(){
		return crud.find();
	},
	updateTitle:function(){
		if(this._id){
			return true;
		}else{
			return false;
		}
	}
})