//import { Template } from 'meteor/templating';


// Router.route('/', function (){
//   name:'attendence',
//   this.render('attendence');
// });
//
// Router.route('/attendence', function (){
//   name:'attendence',
//   this.render('attendence');
// });


Router.route('/', function (){
  //name:'def',
  this.render('def');
});

Router.route('/def', function (){
  //name:'def',
  this.render('def');
});

Router.route('/attendence', function (){
  //name:'attendence',
  this.render('attendence');
});

Router.route('/parent', function (){
  this.render('parent');
});

Router.route('/changeRequest', function (){
  this.render('changeRequest');
});
