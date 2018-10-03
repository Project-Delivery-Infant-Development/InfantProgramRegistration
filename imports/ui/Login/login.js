import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Admin } from '../../api/task.js';

import './login.html';
import '../Others/home.html';
import '../Others/routes.js';
import '../Others/feed.js';
import '../Facilitator/attendence.js';
import '../Admin/admin.js';
import '../Others/feed.js';
import './schema.js';
import '../Parent/parent.js';
import '../Others/body.js';

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
      //Meteor.logout();
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

var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      console.log();
      console.log("idiok"+Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.role);
      if(Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.role == "Parent")
      {
        Router.go("/parents/parent");
      }
      else
      {
        Router.go("/parents/Settings");
       
      }
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
    }
  }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});


var myPostLogout = function(){
  //example redirect after logout
  Router.go('/home');
};

AccountsTemplates.configure({
  onLogoutHook: myPostLogout
});