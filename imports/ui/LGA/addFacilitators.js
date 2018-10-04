import './addFacilitators.html';
import './lgaDashboard.js';
import '../Others/routes.js';
import { Template } from 'meteor/templating';
import { Facilitators } from '../../api/task';

  Template.addFacilitators.helpers({
    facilitatorData() {
        return Facilitators.find({}, { sort: { createdAt: -1 } });
    },
  });

  Template.addFacilitators.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();
   
      // Get value from form element
      const target = event.target;
      const text = target.text.value;
   
      // Insert a task into the collection
      Facilitators.insert({
        text,
        createdAt: new Date(), // current time
      });
   
      // Clear form
      target.text.value = '';
    },
  });
  // Template.addFacilitators.helpers({
//     facilitatorData: [
//       { text: 'This is task 1' },
//       { text: 'This is task 2' },
//       { text: 'This is task 3' },
//     ],
//   });

