import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';


import './admin.js';
import '../Others/routes.js';
import '../Others/feed.js';
import './addsession.html';

import {  AvailableSession } from '../../api/task.js';

Template.addsession.onCreated(function bodyOnCreated(){
    this.state = new ReactiveDict();
});

Template.addsession.events({
	'submit .addses':function(event){
        
            event.preventDefault();
    
        var Session_Id = event.target.Session_Id.value;
        var For=event.target.For.value;//get value from field description
		var LgaId=event.target.LgaId.value;//get value from field description
		var FacilitatorID=event.target.FacilitatorID.value;//get value from field description
        var Availability=event.target.Availability.value;//get value from field description
    //    var AvailableSlots=event.target.AvailableSlots.value;//get value from field description
       
        AvailableSession.insert({

            Session_Id: Session_Id,
            For: For,
            LgaId: LgaId,
            FacilitatorID: FacilitatorID,
            Availability: Availability,
          //  AvailableSlots: AvailableSlots 
            });
            
        event.target.Session_Id.value="";
        event.target.For.value="";//clear form
        event.target.LgaId.value="";//clear form
        event.target.FacilitatorID.value="";//clear form
        event.target.Availability.value="";//clear form
     //   event.target.AvailableSlots.value="";//clear form
       
        },
    });

    Template.addsession.helpers({
   
        Count() {
            return AvailableSession.find().count()
          }
        });




