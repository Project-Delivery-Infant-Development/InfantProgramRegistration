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
  
  userId(){
    
    if(Meteor.userId() != null)
   // Meteor.logout();

    return Meteor.userId();
  }
  
});

AccountsTemplates.addField({
  _id: 'name',
  type: 'text',
  required: true,
  displayName: "Parent Name",
  minLength: 1,
  maxLength: 30,
});

AccountsTemplates.addField({
  _id: 'infantName',
  type: 'text',
  required: true,
  displayName: "Infant Full Name",
  minLength: 1,
  maxLength: 30,
});

AccountsTemplates.addField({
  _id: 'infantAge',
  type: 'text',
  required: true,
  displayName: "Infant Age (in Months)",
  minLength: 1,
  maxLength: 30,
});

AccountsTemplates.addField({
  _id: "gender",
  type: "radio",
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
  _id: 'address',
  type: 'text',
  required: true,
  displayName: "Postal Address",
  errStr: 'Invalid address',
});

AccountsTemplates.addField({
  _id: 'postcode',
  type: 'tel',
  required: true,
  displayName: "Postcode",
  errStr: 'Post code should be 4 digit number',
  minLength:4,
  maxLength:4,
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
  _id: "role",
  type: "radio",
  displayName: "Role",
  select: [
      {
          text: "Parent",
          value: "Parent",
      },
  ],
});




/*AccountsTemplates.addField({
  _id: "role",
  type: "radio",
  displayName: "Your Role",
  select: [
        {
      text: "Parent",
      value: "Parent",
    },
  ],
});*/


var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      
      console.log("idiok"+Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.role);
      var a = Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.role;
      console.log(a);
      if(a === "Parent")
      {
        Router.go("/parents/parent");
      }
      else if(Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.role == "LGA")
      {
        Router.go("/lga/lgaDashboard");
      }
      else if(Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.role == "Facilitator")
      {
        Router.go("/facilitator/attendence");
      }
      else if(Meteor.users.find({_id:Meteor.userId()}).fetch()[0].profile.role == "Admin")
      {
        Router.go("/admin/dashboardAdmin");
      }
    }
    if (state === "signUp") {
      window.alert("Account Create successfully..! Please login to continue.");
      Meteor.logout();
      Router.go('/home/login');
    }
  }
};


var myPostLogout = function(){
  //example redirect after logout
  Router.go('/home');
};

AccountsTemplates.configure({
  onSubmitHook: mySubmitFunc,
  onLogoutHook: myPostLogout,
  hideSignUpLink:true
});
