import '../imports/ui/Admin/facilitators.js';


Meteor.methods({
	insertCrud:function(obj){
		crud.insert(obj);
	},
	update:function(id,obj){
		crud.update({_id:id},{$set:obj});
	}
})

Meteor.publish('crud', function (){ 
	return crud.find({});
  });