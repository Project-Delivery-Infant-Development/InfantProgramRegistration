import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';


import './admin.js';
import '../Others/routes.js';
import '../Others/feed.js';
import './admin_lga.html';

import {  Lga } from '../../api/task.js';

// import SimpleSchema from 'simpl-schema';
// import { Tracker } from 'meteor/tracker';

// Schemas = {};

// Template.registerHelper("Schemas", Schemas);

// Schemas.Person = new SimpleSchema({
//   firstName: {
//     type: String,
//     index: 1,
//     unique: true
//   },
//   lastName: {
//     type: String,
//     optional: true
//   },
//   age: {
//     type: String,
//     optional: true
//   }
// }, { tracker: Tracker });

// var Collections = {};

// Template.registerHelper("Collections", Collections);

// People = Collections.People = new Mongo.Collection("People");
// People.attachSchema(Schemas.Person);

// Meteor.publish(null, function () {
//   return Lga.find();
// });

// Lga.allow({
//   insert: function () {
//     return true;
//   },
//   remove: function () {
//     return true;
//   }
// });
Template.admin_lga.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.admin_lga.events({
	'submit .addlga':function(event){
        
            event.preventDefault();
    
            var lgaid = event.target.lgaid.value;
            var address=event.target.address.value;//get value from field description
		var pcode=event.target.pcode.value;//get value from field description
		var phone=event.target.phone.value;//get value from field description
        var email=event.target.email.value;//get value from field description
        var Sess_Mode=event.target.Sess_Mode.value;//get value from field description
            Lga.insert({
            LgaId: lgaid,
           Address: address,
            Pcode: pcode,
            Phone: phone,
            Email: email,
            Sess_Mode: Sess_Mode 
            });
            
        event.target.lgaid.value="";
        event.target.address.value="";//clear form
        event.target.pcode.value="";//clear form
        event.target.phone.value="";//clear form
        event.target.email.value="";//clear form
        event.target.Sess_Mode.value="";//clear form
        alert("inserted");

        },
    });





