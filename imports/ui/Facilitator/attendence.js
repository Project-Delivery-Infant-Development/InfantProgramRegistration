import { Template } from 'meteor/templating';
import { Tasks } from '../../api/task.js';
import { Tasks1 } from '../../api/task.js';
import { ReactiveDict } from 'meteor/reactive-dict';


import './attendence.html';
import '../Others/feed.js';
import './addGroup.js';
// import './sidebar.html';
// import '../Others/routes.js';



Template.attendence.helpers({
    tasks(){
        const instance = Template.instance();
        if(instance.state.get('hideCompleted')){
            return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
        }
        if(instance.state.get('showHidden')){
            return Tasks.find({checked: {$eq: true}}, {sort: {createdAt: -1}});
        }
        else{
        return Tasks.find({"ID":"G1"},{sort: {createdAt: -1}});
        }
    },
    tasks1(){
        const instance1 = Template.instance();
        if(instance1.state.get('hideCompleted')){
            return Tasks1.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
        }
        if(instance1.state.get('showHidden')){
            return Tasks1.find({checked: {$eq: true}}, {sort: {createdAt: -1}});
        }
        else{
        return Tasks1.find({sort: {createdAt: -1}});
        }
    },
});
Template.attendence.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.attendence.events({
    'submit .new-task': function(event){

        event.preventDefault();

        var t = event.target.text.value;
        var b = event.target.text2.value;

        Tasks.insert({
            ID: b,
            data: {
                Fn: t,
                createdAt: new Date(),
            },
            
        });

      event.target.text.value="";
      event.target.text2.value="";
    },

    'submit .new-task1': function(event){

        event.preventDefault();

        var t = event.target.text.value;

        Tasks1.insert({
            Fn:t,
            createdAt: new Date(),
        });

      event.target.text.value="";
    },

    'change .hide-completed1 input': function(event,instance1){
        instance1.state.set('hideCompleted', event.target.checked);
    },
    'change .show-completed1 input': function(event,instance1){
        instance1.state.set('showHidden', event.target.checked);
    },

    'change .hide-completed input': function(event,instance){
        instance.state.set('hideCompleted', event.target.checked);
    },

    'change .show-completed input': function(event,instance){
        instance.state.set('showHidden', event.target.checked);
    },



});

Template.task.events({
    'click .toggle-checked': function(event){
        Tasks.update(this._id,{
            $set: { checked: ! this.checked },
        });
    },
    'click .delete': function(event){
        Tasks.remove(this._id);
    },
});

Template.task1.events({
    'click .toggle-checked1': function(event){
        Tasks1.update(this._id,{
            $set: { checked: ! this.checked },
        });
    },
    'click .delete1': function(event){
        Tasks1.remove(this._id);
    },
});

Template.registerHelper('formatDate', function(date) {
    return moment(date).format('HH:mm MM-DD-YYYY');
  });
