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

Router.route('/addGroup', function (){
  this.render('addGroup');
});