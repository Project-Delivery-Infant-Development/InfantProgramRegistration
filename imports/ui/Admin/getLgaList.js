import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Lga } from '../../api/task.js';


 import './admin.js';
 import '../Others/routes.js';
 import '../Others/feed.js';
import './admin_lga.html';
import './getLgaList.html';

Template.viewlga.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();	
    });
    
    Template.viewlga.helpers({
        lgaview() {
            return Lga.find({});
     }
});
Template.viewlga.events({
    'click .delete' : function(event){
        Lga.remove(this._id);
    }, 
});


 
