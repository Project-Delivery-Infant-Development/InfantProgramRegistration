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

Router.route('/about', function (){
  this.render('about');
});

Router.route('/contact', function (){
  this.render('contact');
});

Router.route('/faqs', function (){
  this.render('faqs');
});

Router.route('/for_providers', function (){
  this.render('for_providers');
});

Router.route('/admin', function (){
   this.render('admin');
 });

Router.route('/login', function (){
  this.render('login');
});

Router.route('/atten', function (){
  this.render('atten');
});
