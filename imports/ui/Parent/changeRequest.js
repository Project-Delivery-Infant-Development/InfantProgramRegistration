import { Template } from 'meteor/templating';
import {Parent, Request, User} from '../../api/task.js';
import moment from 'moment';

import './changeRequest.html';
import '../Others/routes.js';
import './parent.js';

Template.changeRequest.helpers({
    parents(){
        return Parent.find({Id:"PA001"});
    },
});

Template.changeRequest.events({
    'submit .frmRequest': function(event){
        event.preventDefault();
        var userid="PA001"; //Should be taken from the session.
        var type=event.target.type.value;
        var datefrom = event.target.datefrom.value;
        var dateto =event.target.dateto.value;
        var remarks = event.target.remarks.value;
        var col=Request.find({}, { sort: { _id: -1 }, limit: 1 }).fetch({});
        var incid=(parseInt(col[0]._id)+1).toString();
        Request.insert({
            _id: incid,
            From: userid,
            Type: type,
            DateFrom:datefrom,
            DateTo: dateto,
            Remarks: remarks,
            createdAt: new Date()
        });

        window.alert("Request placed successfully.!");
        clearform(event);
    },

});

export function clearform(e) {
    e.target.remarks.value="";
}

