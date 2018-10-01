import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Admin } from '../../api/task.js';

import './login.html';
import '../Others/routes.js';
import '../Others/feed.js';
import '../Facilitator/attendence.js';
import '../Admin/admin.js';
import '../Others/feed.js';
import './schema.js';
import '../Facilitator/attendence.js';
import '../Parent/parent.js';


Template.login.helpers({
  tabs: function(){
    return[
      { name: 'User', slug: 'ses1'},
      { name: 'Admin', slug: 'ses2'},
     
    ];
  },

  activeTab: function(){
    console.log("Active tab here");
    
  },


});

Template.dashboard.events({
  'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
  },
});

Template.login.events({
  'submit .adminlogin': function(event){
    event.preventDefault();
    
    var em = event.target.adminEmail.value;
    var pass = event.target.adminPassword.value;
    
    var a = Admin.find({$and:[{Email:em, Password:pass}]}).fetch()[0].Name;
  },
});

AccountsTemplates.addField({
  _id: 'name',
  type: 'text',
  required: true,
  displayName: "Full Name",
  minLength: 1,
  maxLength: 30,
});

AccountsTemplates.addField({
  _id: 'phone',
  type: 'tel',
  required: true,
  displayName: "Mobile Number",
  errStr: 'Invalid Mobile number!',
  minLength: 10,
  maxLength: 10,
});


AccountsTemplates.addField({
  _id: "gender",
  type: "select",
  displayName: "Gender",
  select: [
      {
          text: "Male",
          value: "male",
      },
      {
          text: "Female",
          value: "female",
      },
  ],
});


AccountsTemplates.addField({
  _id: "role",
  type: "radio",
  displayName: "Your Role",
  select: [
       {
      text: "LGA",
      value: "LGA",
    }, {
      text: "Parent",
      value: "Parent",
    },
  ],
});


// Template.login.events({
//     'submit .loginUser': function(e){
//     console.log("Login User");
//     },
//     'submit .loginAdmin':function(e1){
//         //Router.go('admin');
//       console.log("Login Admin");},
//     });
 
//   Template.login.helpers({
//     tabs: function(){
//       return[
//         { name: 'Admin', slug: 'session1'},
//         { name: 'User', slug: 'session2'},
//       ]
//     },
//  });
