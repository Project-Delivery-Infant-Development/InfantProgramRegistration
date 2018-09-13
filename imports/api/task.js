
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
export const Tasks1 = new Mongo.Collection('tasks1');
export const Parents = new Mongo.Collection('parent');
export const Facilitators = new Mongo.Collection('facilitatorData');
export const ChangeRequests = new Mongo.Collection('changeRequestsData');
