import { Mongo } from 'meteor/mongo';

export const Tasks1 = new Mongo.Collection('tasks1');
export const Parent = new Mongo.Collection('parent');
export const User =new Mongo.Collection('user');
export const Request=new Mongo.Collection('request');
export const Lga=new Mongo.Collection('lga');
export const Group=new Mongo.Collection('group');
export const Sessions = new Mongo.Collection('sessions');
export const Admin=new Mongo.Collection('admin');
export const Facilitator=new Mongo.Collection('facilitator');
export const Facilitators = new Mongo.Collection('facilitatorData');
export const ChangeRequests = new Mongo.Collection('changeRequestsData');