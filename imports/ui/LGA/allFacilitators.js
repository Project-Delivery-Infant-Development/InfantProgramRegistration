import './allFacilitators.html';
import './lgaDashboard.js';
import '../Others/routes.js';
import { Template } from 'meteor/templating';
// import { Facilitators } from '../../api/task.js';
import { Lga } from '../../api/task.js';
import { ReactiveDict } from 'meteor/reactive-dict';



Template.allFacilitators.onCreated(function bodyOnCreated(){
  this.state = new ReactiveDict();	
  });
  
  Template.allFacilitators.helpers({
      lgaview() {
          return Lga.find({});
   }
});
Template.allFacilitators.events({
  'click .delete' : function(event){
    Lga.remove(this._id);
  }, 
});



// Template.allFacilitators.onCreated(function bodyOnCreated() {
//     this.state = new ReactiveDict();
//   });

//   Template.allFacilitators.helpers({
//     facilitatorData() {
//         const instance = Template.instance();
//         if (instance.state.get('hideCompleted')) {
//           // If hide completed is checked, filter tasks
//           return Facilitators.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
//         }
//         return Facilitators.find({}, { sort: { createdAt: -1 } });
//     },
//   });
//   Template.allFacilitators.events({
//     'click .toggle-checked'() {
//       // Set the checked property to the opposite of its current value
//       Facilitators.update(this._id, {
//         $set: { checked: ! this.checked },
//       });
//     },
//     'click .delete'() {
//         Facilitators.remove(this._id);
//     },
//     'change .hide-completed input'(event, instance) {
//         instance.state.set('hideCompleted', event.target.checked);
//       },
//   });

  
  