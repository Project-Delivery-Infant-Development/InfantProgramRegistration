import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './routes.js';
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
import '../Parent/genSettings.js';
import '../Parent/changePwd.js';
import '../Facilitator/addGroup.js';
import '../Facilitator/addGroup.html';
import '../Parent/changeRequest.js';
import '../Parent/changeRequest.html';
import '../Parent/parentGetSession.js';
import '../Parent/parentGetSession.html';
import '../Parent/registerParent.js';

import '../Login/login.js';
import '../Login/login.html';
import '../Admin/admin.js';
import '../Admin/atten.js';
import '../Admin/admin_lga.html';
import '../Admin/admin_lga.js';
import '../Admin/getLgaList.js';
import '../../api/task.js';
import '../Others/feed.js';
import '../../api/createDb.js';
import '../Admin/addUser.js'

import '../LGA/lgaDashboard.js';

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

  'click #joinNow': function(event){
    event.preventDefault();
    Router.go('registerParent');
  }
});
