import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Lga } from '../../api/task.js';


 import './admin.js';
 import '../Others/routes.js';
 import '../Others/feed.js';
import './admin_lga.html';
import './getLgaList.html';

Template.viewlga.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();	
    });
    
    Template.viewlga.helpers({
        lgaview() {
            return Lga.find({});
     }
});
Template.viewlga.events({
    'click .delete' : function(event){
        Lga.remove(this._id);
    }, 
});


 
// //import '../Others/feed.js';
// //import '../Others/routes.js';
// //import { Template } from 'meteor/templating';

// //import { Parent1 } from '../../api/task.js';



// //import './parentGetSession.html';


// Template.lgaview.onCreated(function () {
//     this.pagination = new Meteor.Pagination(Lga, {
//         sort: {
//             _id: -1
//         }
//     });
// });

// Template.lgaview.helpers({
//     isReady: function () {
//         return Template.instance().pagination.ready();
//     },
//     templatePagination: function () {
//         return Template.instance().pagination;
//     },
//     lga1: function () {
//              return Template.instance().pagination.getPage();
//         },
//     // optional helper used to return a callback that should be executed before changing the page
   
//     clickEvent: function() {
//         return function(e, templateInstance, clickedPage) {
//             e.preventDefault();
//             console.log('Changing page from ', templateInstance.data.pagination.currentPage(), ' to ', clickedPage);
//         };
//     }
// });

// Template.getlga.helpers({
//     lga2(){
//         return Lga.find({});
//     },
// });

// //"text": sessionNo







