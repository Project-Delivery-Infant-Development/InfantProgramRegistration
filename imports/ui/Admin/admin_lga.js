import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';


import './admin.js';
import '../Others/routes.js';
import './admin_lga.html';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';
import { Dataadminlga } from '../../api/task.js';

DataadminlgaSchema= new SimpleSchema({
    email:{
        type: String,
        label: "Email"
    },
    name:{
        type: String,
        label: "Name"
    },
    
    phone:{
        type: Number,
        label: "Phone"
    },
    location:{
        type: String,
        label: "Location"
    },
});
Dataadminlga.attachSchema(DataadminlgaSchema);