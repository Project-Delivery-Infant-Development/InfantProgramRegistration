Router.route('/', function (){
  this.render('home');
});

Router.route('/home', function (){
  this.render('home');
});

Router.route('/attendence', function (){
  this.render('attendence');
});

Router.route('/parent', function (){
  this.render('parent');
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

<<<<<<< HEAD
// Router.route('/def', function (){
//   this.render('def');
// });
Router.route('/addGroup', function(){
  this.render('addGroup');
});
=======
Router.route('/addGroup', function (){
  this.render('addGroup');
});

Router.route('/changeRequest', function(){
  this.render('changeRequest');
});

Router.route('/lgaDashboard', function(){
  this.render('lgaDashboard');
});

Router.route('/allFacilitators', function(){
  this.render('allFacilitators');
});


Router.route('/addFacilitators', function(){
  this.render('addFacilitators');
});

Router.route('/viewRecords', function(){
  this.render('viewRecords');
});
>>>>>>> ddc5b9749c8481bae0bbca0b996cd416c33c855e
