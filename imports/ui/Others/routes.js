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
Router.route('/changeRequest', function (){
  this.render('changeRequest');
});

Router.route('/changePwd', function (){
  this.render('changePwd');

});

Router.route('/genSettings', function (){
  this.render('genSettings');
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
Router.route('/addGroup', function (){
  this.render('addGroup');
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
