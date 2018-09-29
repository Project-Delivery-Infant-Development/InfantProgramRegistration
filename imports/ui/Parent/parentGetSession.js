
 
//import '../Others/feed.js';
//import '../Others/routes.js';
import { Template } from 'meteor/templating';

import { Parent1 } from '../../api/task.js';



import './parentGetSession.html';


Template.parentGetSession.onCreated(function () {
    this.pagination = new Meteor.Pagination(Parent1, {
        sort: {
            _id: -1
        }
    });
});

Template.parentGetSession.helpers({
    isReady: function () {
        return Template.instance().pagination.ready();
    },
    templatePagination: function () {
        return Template.instance().pagination;
    },
    parent1: function () {
     
        return Template.instance().pagination.getPage();
    },
    // optional helper used to return a callback that should be executed before changing the page
   
    clickEvent: function() {
        return function(e, templateInstance, clickedPage) {
            e.preventDefault();
            console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
        };
    }
});

Template.getSession.events({
    'click .reg': function(){
            console.log(Parent1.find({"text": sessionNo}).fetch());
    },
});








