import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';


import '../Facilitator/attendence.js';
import '../Facilitator/attendence.html';
// import './feed.js ';
// import './feed.html ';
import './routes.js';


ReactiveTabs.createInterface({
  template:'basicTabs',
  onChange: function(slug, template){
    console.log('[tabs] Tab has changed! Current tab:', slug);
    console.log('[tabs] Template instance calling onChange:', template);
  }
});

Template.attendence.helpers({
  tabs: function(){
    return[
      { name: 'Session 1', slug: 'session1'},
      { name: 'Session 2', slug: 'session2'},
      // { name: 'Things', slug: 'things', onRender: function(slug, template){
      //   alert("[tabs] things has been rendered");
      // }}
    ];
  },

  activeTab: function(){
    console.log("Active tab here");
    //return Session.get('activeTab');
  }
});
// Router.route('/', function (){
//   // render the Home template with a custom data context
//   this.render('home');
// });



// Router.route('/another', function(){
//   this.render('another');
// });
