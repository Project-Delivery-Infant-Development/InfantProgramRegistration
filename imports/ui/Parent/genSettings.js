import { Template } from 'meteor/templating';
import {User} from '../../api/task.js';
import './genSettings.html';
import './changePwd.html';

Template.body.helpers({
    
});

Template.genSettings.events({
    'submit .frmProfile': function(event){
        event.preventDefault();
        var userid="PA001"; //Should be taken from the session.
        var col=User.find({Id:userid}).fetch({});
        var colid=col[0]._id;
        var address = event.target.address.value;
        var pcode = event.target.pcode.value;
        var phone = event.target.phone.value;
        var email = event.target.email.value;
        var photo = "Photo"//event.target.photo.value;
        
        User.update({_id:colid}, { $set: { address:address, pcode:pcode, phone:phone, email:email, photo:photo } });
        window.alert("Details Updated successfully.!");
        clearform(event);
        
    },
});

function clearform(e) {
     e.target.address.value="";
     e.target.pcode.value="";
     e.target.phone.value="";
     e.target.email.value="";
     e.target.address.focus();
    
}

