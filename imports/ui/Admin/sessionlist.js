import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Lga, AvailableSession } from '../../api/task.js';


 import './admin.js';
 import '../Others/routes.js';
 import '../Others/feed.js';
import './admin_lga.html';
import './sessionlist.html';

Template.sessionlist.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();	
    });
    
    Template.sessionlist.helpers({
        sesview() {
            return AvailableSession.find({});
        },
        
});
Template.sessionlist.events({
    'click .delete' : function(event){
        AvailableSession.remove(this._id);
    }, 
});


 
