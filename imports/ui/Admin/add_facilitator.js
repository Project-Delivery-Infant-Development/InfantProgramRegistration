import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';


import './admin.js';
import '../Others/routes.js';
import '../Others/feed.js';
import './add_facilitator.html';

import { Addfacilitator } from '../../api/task.js';

Template.add_facilitator.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.add_facilitator.events({
	'submit .addfacilitator':function(event){
        
            event.preventDefault();
    
            var lgaid = event.target.lgaid.value;
            var facilitatorid=event.target.facilitatorid.value;//get value from field description
		var fori=event.target.fori.value;//get value from field description
		
            Addfacilitator.insert({
            LgaId: lgaid,
           FacilitatorId: facilitatorid,
            For: fori,
            });
            
        event.target.lgaid.value="";
        event.target.facilitatorid.value="";//clear form
        event.target.fori.value="";//clear form
        alert("inserted");

        },
    });





