
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
export const Tasks1 = new Mongo.Collection('tasks1');

export const Facilitators = new Mongo.Collection('facilitatorData');

export const parent = new Mongo.Collection('parent');

export const parent1 = new Mongo.Collection('parent1');