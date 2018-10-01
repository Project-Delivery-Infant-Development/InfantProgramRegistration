import { Template } from 'meteor/templating';
import {User, Lga, Admin, Facilitator} from '../../api/task.js';
import './addUser.html';

var bcrypt = require('bcryptjs');
var hash = bcrypt.hashSync("defaultpass", 10);

Template.addUser.helpers({
    lgas(){
        return Lga.find({});
    },
});

Template.addUser.events({
    'submit .frmUser': function(event){
        event.preventDefault();
        var id = event.target.userid.value;
        var fname = event.target.fname.value;
        var lname = event.target.lname.value;
        var address = event.target.address.value;
        var pcode = event.target.pcode.value;
        var phone = event.target.phone.value;
        var email = event.target.email.value;
        var role = event.target.role.value; 
        var lgaid = event.target.lgaid.value;       
        User.insert( 
            {
                _id: id,
                Id: id,
                Password: hash,
                fname: fname,
                lname: lname,
                address: address,
                pcode: pcode,
                phone: phone,
                email: email,
                photo: "Url",
                role: role,
                status: "Active",
                lastPassUpdate:new Date()
            });
            if(role == "Admin")
            {
                Admin.insert({
                    _id:id,
                    Id:id,
                    LgaId:lgaid
                });
                
            }
            else if(role=="Facilitator")
            {
                Facilitator.insert({
                    _id: lgaid+id,
                    Id	: id,
                    No_of_Sessions:0,
                    LgaId: lgaid
                });
            }


        window.alert("User added successfully.! New Password: 'defaultpass' ");
        clearform(event);
        
    },
});

function clearform(e) {
    e.target.id.value=e.target.fname.value=e.target.lname.value="";
     e.target.address.value="";
     e.target.pcode.value="";
     e.target.phone.value="";
     e.target.email.value="";
     e.target.address.focus();
    
}

