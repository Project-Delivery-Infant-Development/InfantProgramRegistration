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
        var old = event.target.old_Pwd.value;
        var newpwd = event.target.new_Pwd.value;
        var newpwd2 = event.target.cnf_new_Pwd.value;
        
        if(newpwd===newpwd2){
            Accounts.changePassword(old,newpwd);
            window.alert("Password Updated successfully.!");
            clearform(event);
        }
        else{
            alert("New password do not match");
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