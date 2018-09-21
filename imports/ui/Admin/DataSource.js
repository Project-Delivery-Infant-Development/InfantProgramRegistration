export const DataSource = new Meteor.Collection('DataSource');

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
       