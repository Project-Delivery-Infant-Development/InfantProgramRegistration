import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './login.html';
import '../Others/routes.js';
import '../Others/feed.js';
import '../Facilitator/attendence.js';
import '../Admin/admin.js';



Template.login.events({
    'submit .loginUser': function(e){
    console.log("Login User");
    },
    'submit .loginAdmin':function(e1){
        //Router.go('admin');
      console.log("Login Admin");},
    });
 
  Template.login.helpers({
    tabs: function(){
      return[
        { name: 'Admin', slug: 'session1'},
        { name: 'User', slug: 'session2'},
      ]
    },
 });