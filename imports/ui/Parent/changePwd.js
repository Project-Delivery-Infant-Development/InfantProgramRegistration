import { Template } from 'meteor/templating';
import {User, Parent} from '../../api/task.js';
import './changePwd.html';
import './parent.html';
import './genSettings.html';


Template.changePwd.helpers({
    users(){
        return User.find({});
    }
});

Template.changePwd.events({
    'submit .frmPwd': function(event){
        
        event.preventDefault();
        var userid="PA001"; //Should be taken from the session.
        var col=User.find({Id:userid}).fetch({});
        var colid=col[0]._id;
        var old = event.target.old_Pwd.value;
        var newpwd = event.target.new_Pwd.value;
        var newpwd2 = event.target.cnf_new_Pwd.value;
        var bcrypt = require('bcryptjs');
        if (!bcrypt.compareSync(old, col[0].Password))
        {
            window.alert(" You entered Wrong password.");
           clearform(event);
        }
        else if(newpwd != newpwd2)
        {
            window.alert("New Passwords didn't Match");
           clearform(event);    
        }
        else {
        
        User.update({_id:colid},{ $set: { Password: bcrypt.hashSync(newpwd, 10), lastPassUpdate:new Date()}  });
        window.alert("Password Updated successfully.!");
        clearform(event);
        }
    },

});

export function clearform(e) {
    e.target.old_Pwd.value="";
    e.target.new_Pwd.value="";
    e.target.cnf_new_Pwd.value="";
    e.target.old_Pwd.focus();
    
}