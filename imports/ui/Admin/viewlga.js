import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';


import './admin.js';
import '../Others/routes.js';
import '../Others/feed.js';
import './admin_lga.html';

import {  Lga } from '../../api/task.js';

Template.viewlga.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();	
    });
    
    Template.viewlga.helpers({
        lgaview() {
            return Lga.find({});
     }
     });