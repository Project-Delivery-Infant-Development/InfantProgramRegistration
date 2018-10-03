import { Template } from 'meteor/templating';
import { Attendence} from '../../api/task.js';
import { ReactiveDict } from 'meteor/reactive-dict';

import './atten.html';
import './admin.js';
import '../Others/routes.js';
import '../Others/body.js';
import '../Others/feed.js';

Template.atten.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.atten.events({
    'change .ss1 input': function(event,instance){
        instance.state.set('ss1', event.target.checked);
    },
    'change .ss2 input': function(event,instance){
        instance.state.set('ss2', event.target.checked);
    },
    });

Template.atten.helpers({
    atte() {
    const instance = Template.instance();
    if(instance.state.get('ss1')){
        return Attendence.find({SessionID: "123" , Attended : true});
    }
    if(instance.state.get('ss2')){
        return Attendence.find({SessionID: "567", Attended : true});
    }
       }
});