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
  this.render('home');
});

Router.route('/home', function (){
  //name:'def',
  this.render('home');
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

Router.route('/changePwd', function (){
  this.render('changePwd');
});

Router.route('/genSettings', function (){
  this.render('genSettings');
});
