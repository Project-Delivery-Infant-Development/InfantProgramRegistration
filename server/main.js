import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Parent, User, Request, Groups, Session, Lga, Admin, Facilitator } from '../imports/api/task.js';
import '../imports/ui/Others/routes.js';
import '../imports/api/task.js';


if (Meteor.isServer) {
    Meteor.startup(function() {
      return Meteor.methods({

        removeData: function() {
            Parent.remove({});
            User.remove({});
            Request.remove({});
            Groups.remove({});
            Session.remove({});
            Lga.remove({});
            Admin.remove({});
            Facilitator.remove({});
        }
      });
  
    });
  
  }
  
  