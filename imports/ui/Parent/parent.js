import { Template } from 'meteor/templating';
import { Parent } from '../../api/task.js';

import './parent.html';
import './nav_parent.js';
import './changeRequest.js';
import './changePwd.js';
import './genSettings.js';
import '../Others/routes.js';

Template.parent.helpers({
    
    n(){
        return Meteor.users.find({}).fetch()[0].profile.name;
    },
    parents(){
        console.log(Meteor.userId());
        return Parent.find({Id:Meteor.users.find({}).fetch()[0].profile.name}).fetch();
    },
});

Template.parent.events({
    
});
function doFunction() {
    // document.getElementById("clickMe").onclick = doFunction;  
    alert("Hello Buddys");  // Code to be executed
}


//- Using an anonymous function:
// document.getElementById("clickMe").onclick = function () { alert('hello!'); };
