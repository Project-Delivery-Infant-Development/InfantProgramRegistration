import './addGroup.html';
import '../Others/feed.js';
import '../Others/routes.js';

$(document).keyup(function(evt) {
    if (evt.keyCode === 27) {
        Session.set('dropdown', null);
    }
});

Template.addGroup.events({
    'click': function() {
        Session.set('dropdown', null);
    }
});

Template.dropdown.helpers({

    "addGroup": function() {
        return 'dropdown_' + this.name;
    },

    "templateData": function() {
        // add an 'open' property to the template for the child to tell if it is open
        // _.extend(dest, src) copies all the properties in src to dest and returns dest
        return _.extend({open: Session.equals('dropdown', this.name)}, this);
    }

});

Template.dropdown.events({

    'click button': function(evt) {
        evt.preventDefault();
        evt.stopPropagation();  // stops the full-page click handler above from firing
        Session.set('dropdown', this.name);
    },

    'click .dropdown-menu li a': function(evt) {
        evt.preventDefault();
        Session.set('dropdown', null);
    }

});