import './allFacilitators.html';
import '../Others/feed.js';
import '../Others/routes.js';
import { Template } from 'meteor/templating';
import { Facilitators } from '../../api/task';

  Template.allFacilitators.helpers({
    facilitatorData() {
      return Facilitators.find({});
    },
  });