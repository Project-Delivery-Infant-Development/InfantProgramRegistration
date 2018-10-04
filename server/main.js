import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Parent, User, Request, Groups, Session, Lga, Admin, Facilitator } from '../imports/api/task.js';
import {Parent1} from '../imports/api/task.js';
import { publishPagination } from 'meteor/kurounin:pagination';
publishPagination(Parent1);
import '../imports/ui/Others/routes.js';
import '../imports/api/task.js';
 


if (Meteor.isServer) {
    Meteor.startup(function() {
      Meteor.methods({
        'insertUser' (email,password,name,gender,address, postcode,phone, role){
          Accounts.createUser({
            email:email,
            password:password,
            profile:{
              name:name,
              gender: gender,
              address: address,
              postcode:postcode,
              phone:phone,
              role:role,
            }
        });
      }
     });
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
        },
      });

      
    });
  
  }
  

