import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';


import './admin.js';
import '../Others/routes.js';
import '../Others/feed.js';
import './facilitatorlist.html';

import {  Addfacilitator } from '../../api/task.js';

Template.facilitatorlist.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();	
    });
    
    Template.facilitatorlist.helpers({
        facview() {
            return Addfacilitator.find({});
     }
     });
Template.facilitatorlist.events({
        'click .delete' : function(event){
            Addfacilitator.remove(this._id);
        }, 
    });
