export const DataSource = new Meteor.Collection('DataSource');
export const DataSource1 = new Meteor.Collection('DataSource1');

if(Meteor.isClient) {
  Meteor.startup(function() {
    if (!DataSource.find({}).fetch().length) {
      DataSource.insert({x: 'session 1 sunshine', value: 63});
      DataSource.insert({x: 'session 1 geelong', value: 72});
      DataSource.insert({x: 'session 1 dockland', value: 14});
      DataSource.insert({x: 'session 2 sunshine', value: 78});
      DataSource.insert({x: 'session 2 geelong', value: 90});
      DataSource.insert({x: 'session 2 dockland', value: 90});
      DataSource.insert({x: 'session 3 sunshine', value: 90});
      DataSource.insert({x: 'session 3 geelong', value: 90});
      DataSource.insert({x: 'session 3 dockland', value: 90});
    }
  });
}
if(Meteor.isClient) {
  Meteor.startup(function() {
    if (!DataSource1.find({}).fetch().length) {
      DataSource1.insert({x: 'session 1 Good', value: 63});
      DataSource1.insert({x: 'session 1 Bad', value: 72});
      DataSource1.insert({x: 'session 2 Good', value: 78});
      DataSource1.insert({x: 'session 2 Bad', value: 90});
      DataSource1.insert({x: 'session 3 Good', value: 90});
      DataSource1.insert({x: 'session 3 Bad', value: 90});
    }
  });
}
