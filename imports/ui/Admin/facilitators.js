
import './facilitators.html';
import '../Others/routes.js';
import '../Others/feed.js';



import { Template } from 'meteor/templating';
import { fac } from '../../api/task.js';
import { ReactiveDict } from 'meteor/reactive-dict';


Template.facilitators.helpers({
    ta(){
            return fac.find({}); 
	},
});
Template.facilitators.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.facilitators.events({
    'submit .add': function(event){

        event.preventDefault();

        var title = event.target.text.value;
        var number = event.target.num.value
        fac.insert({
			title: title,
			num: number,
            
        });
      event.target.text.value="";
      event.target.num.value="";
       },

});

