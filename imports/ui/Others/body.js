import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';

import '../Facilitator/attendence.js';
import '../Facilitator/attendence.html';

import '../Parent/parent.html';
import './about.html';
import './contact.html';
import './faqs.html';
import './home.html';
import './providers.html';
import '../Parent/parent.js';
import '../Parent/changeRequest.js';
import '../Facilitator/addGroup.js';
import '../Facilitator/addGroup.html';
import '../Parent/changeRequest.js';
import '../Parent/changeRequest.html';




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

Template.home.events({
  'click #login':function(e){
    Router.go('login');
  },
});
