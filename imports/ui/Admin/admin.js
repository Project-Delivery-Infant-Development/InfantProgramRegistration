
import './admin.html';
import '../Login/login.js';
import '../Others/routes.js';
import './satisfaction.js';
import './facilitators.js';
import '../Others/feed.js';
import './dashboardAdmin.js';
import './addsession.js';
import './sessionlist.js';

import './facilitatorlist.js';
import './add_facilitator.js';

Template.admin.events({
    'click .logout': function(event){
		event.preventDefault();
		Meteor.logout();
		Router.go('/home/login');
    }
});
