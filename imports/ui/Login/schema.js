import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Schemas = {};
// Create a simple Schema
Template.registerHelper('Schemas', Schemas);

Schemas.Person = new SimpleSchema({
  firstName: {
    type: String
  },
  lastName: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    optional: true,
    autoform:{
      type: 'email'
    }
  },
  zip: {
    type: String,
    optional: true
  }
}, { tracker: Tracker });

const Collections = {};

Template.registerHelper('Collections', Collections);

People = Collections.People = new Mongo.Collection('People');
People.attachSchema(Schemas.Person);



People.allow({
  insert() {
    return true;
  },
  remove() {
    return true;
  }
});
