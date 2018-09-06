import { Template } from 'meteor/templating';
import {Parents} from '../../api/task.js';
import './changeRequest.html';
import './parent.js';

Template.body.helpers({
    parents(){
        return Parents.find({});
    },
});
