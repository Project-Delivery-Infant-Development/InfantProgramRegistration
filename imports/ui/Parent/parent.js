import { Template } from 'meteor/templating';
import {Parent} from '../../api/task.js';

import './parent.html';
import './nav_parent.js';
import './changeRequest.js';
import './changePwd.js';
import './genSettings.js';
import '../Others/routes.js';

Template.parent.helpers({
    parents(){
        return Parent.find({Id:"PA001"});
    },
});

Template.parent.events({
    'click .insert': function(e){
        e.preventDefault();
        console.log("Buttonclicked");
    }
});
function doFunction() {
    // document.getElementById("clickMe").onclick = doFunction;  
    alert("Hello Buddys");  // Code to be executed
}


//- Using an anonymous function:
// document.getElementById("clickMe").onclick = function () { alert('hello!'); };
