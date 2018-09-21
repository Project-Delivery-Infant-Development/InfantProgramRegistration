import './allFacilitators.html';
import '../Others/feed.js';
import '../Others/routes.js';
import { Template } from 'meteor/templating';
import { Facilitators } from '../../api/task.js';

Template.allFacilitators.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
  });

  Template.allFacilitators.helpers({
    facilitatorData() {
        const instance = Template.instance();
        if (instance.state.get('hideCompleted')) {
          // If hide completed is checked, filter tasks
          return Facilitators.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
        }
        return Facilitators.find({});
    },
  });
  Template.allFacilitators.events({
    'click .toggle-checked'() {
      // Set the checked property to the opposite of its current value
      Facilitators.update(this._id, {
        $set: { checked: ! this.checked },
      });
    },
    'click .delete'() {
        Facilitators.remove(this._id);
    },
    'change .hide-completed input'(event, instance) {
        instance.state.set('hideCompleted', event.target.checked);
      },
  });

  
  