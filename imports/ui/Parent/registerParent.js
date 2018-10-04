import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Admin } from '../../api/task.js';

import './registerParent.html';
import '../Others/routes.js';
import './parent.js';

Template.registerParent.helpers({
    userId(){
    
        if(Meteor.userId() != null)
        Meteor.logout();
        return Meteor.userId();
      }
      
});



Template.registerParent.events({
  
});


