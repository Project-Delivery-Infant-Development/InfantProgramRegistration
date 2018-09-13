import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
export const Tasks1 = new Mongo.Collection('tasks1');
export const parent = new Mongo.Collection('parent');
export const user =new Mongo.Collection('user');
export const request=new Mongo.Collection('request');
export const lga=new Mongo.Collection('lga');
export const group=new Mongo.Collection('group');
export const session=new Mongo.Collection('session');
export const admin=new Mongo.Collection('admin');
export const facilitator=new Mongo.Collection('facilitator');

export const Facilitators = new Mongo.Collection('facilitatorData');
