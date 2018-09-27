
import { Template } from 'meteor/templating';
import { Tasks1 } from '../../api/task.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './atten.html';
import './admin.js';
import '../Others/routes.js';
import '../Others/body.js';
import '../Others/feed.js';
//import './addGroup.js';
import { Sessions } from '../../api/task.js';


Template.atten.helpers({
    tasks(){
        const instance = Template.instance();
        if(instance.state.get('hideCompleted')){
            return Sessions.find({checked: {$ne: true}}, {sort: {createdAt: -1}}); 
        }
        if(instance.state.get('showHidden')){
            return Sessions.find({checked: {$eq: true}}, {sort: {createdAt: -1}}); 
        }
        else{
        return Sessions.find({},{sort: {createdAt: -1}});
        }
    },
});
Template.atten.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.atten.events({

    'change .hide-completed input': function(event,instance){
        instance.state.set('hideCompleted', event.target.checked);
    },

    'change .show-completed input': function(event,instance){
        instance.state.set('showHidden', event.target.checked);
    },
});

Template.tas.events({
    'click .toggle-checked': function(event){
        Sessions.update(this._id,{
            $set: { checked: ! this.checked },
        });
    },
    'click .delete': function(event){
        Sessions.remove(this._id);
    },
});

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('HH:mm MM-DD-YYYY');
  });


