import './sessionChangeRequest.html';
import '../Others/feed.js';
import '../Others/routes.js';
import { Template } from 'meteor/templating';
import { ChangeRequests } from '../../api/task.js';

Template.sessionChangeRequest.onCreated(function bodyOnCreated() {
    this.state = new ReactiveDict();
  });

  Template.sessionChangeRequest.helpers({
    sessionChangeRequestData() {
        const instance = Template.instance();
        if (instance.state.get('hideCompleted')) {
          // If hide completed is checked, filter tasks
          return ChangeRequests.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
        }
        return ChangeRequests.find({}, { sort: { createdAt: -1 } });
    },
  });
  Template.sessionChangeRequest.events({
    'click .toggle-checked'() {
      // Set the checked property to the opposite of its current value
      ChangeRequests.update(this._id, {
        $set: { checked: ! this.checked },
      });
    },
    'click .decline'() {
        ChangeRequests.remove(this._id);
    },
    'change .hide-completed input'(event, instance) {
        instance.state.set('hideCompleted', event.target.checked);
      },
  });

  
  