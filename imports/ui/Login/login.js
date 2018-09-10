import './login.html';
import '../Others/routes.js';
import '../Facilitator/attendence.js';
import '../Admin/admin.js';



Template.login.events({
    'submit .loginUser':function(e){
      Router.go('attendence');
    console.log("1");
    },
    'submit .loginAdmin':function(e1){
        Router.go('admin');
      console.log("2");},
    });
 
  Template.login.helpers({
    tabs: function(){
      return[
        { name: 'Admin', slug: 'session1'},
        { name: 'User', slug: 'session2'},
      ]
    },
 });