
import { Template } from 'meteor/templating';
import {parent1} from '../../api/task.js';

import './Parent/parentgetsession.html';

if (Meteor.isClient) {
     Session.setDefault("skip",0);
     Deps.autorun(function(){
           Meteor.subscribe("getSession",Session.get("skip"))
     });
     Template.parentgetsession.helpers({
         parent1 :function() {
             return parent1.find();
         }
     });

     Template.parentgetsession.events({
         'click .previous':function(){
             if(Session.get('skip')>2){
                 Session.set('skip',Session.get('skip')-2);
             }
         },
         'click .next':function(){
              Session.set('skip',Session.get('skip')+2);
         }
     })
}

if (Meteor.isServer) {
     Meteor.startup(function () {
         Meteor.publish('getSession',function(skipCount){
             return parent1.find({},{limit:2,skip:skipCount});
         })
        
     });
}