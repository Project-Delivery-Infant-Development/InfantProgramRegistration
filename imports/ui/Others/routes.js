
//<--------------------Home Page Routes-------------------------------->

Router.route('/', function (){
  this.render('home');
});

Router.route('home',{
  layoutTemplate: 'home',
  path:'/home',
  template: 'home',
  onBeforeAction: function(){
    import '../imports/ui/Others/home.html';
    this.next();
  },
  action: function(){
    this.render('home');
  },
});

Router.route('faqs',{
  layoutTemplate: 'faqs',
  path: '/home/faqs',
  template: 'faqs',
  onBeforeAction: function(){
      import '../imports/ui/Others/faqs.html';
      this.next();
  },
  action: function(){
    this.render('faqs');
},
});

Router.route('about',{
  templateLayout: 'about',
  path:'/home/about',
  template: 'about',
  onBeforeFunction: function(){
    import '../imports/ui/Others/about.html';
    this.next();
  },
  action: function(){
    this.render('about');
  },
});

Router.route('contact',{
  templateLayout: 'contact',
  path:'/home/contact',
  template: 'contact',
  onBeforeFunction: function(){
    import '../imports/ui/Others/contact.html';
    this.next();
  },
  action: function(){
    this.render('contact');
  },
});

Router.route('for_providers',{
  templateLayout: 'for_providers',
  path: '/home/for_providers',
  template: 'for_providers',
  onBeforeFunction: function(){
    import '../imports/ui/Others/providers.html';
    this.next();
  },
  action: function(){
    this.render('for_providers');
  },
});

//<----------------Parents Page Routes------------------>

Router.route('parent',{
  layoutTemplate: 'parent',
  path: '/parents/parent',
  template: 'parent',
  onBeforeAction: function(){
    import '../imports/ui/Parent/parent.html';
    this.next();
  },
  action: function(){
    this.render('parent');
  },
});

Router.route('changeRequest',{
  templateLayout: 'changeRequest',
  path: '/parents/changeRequest',
  template: 'changeRequest',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/changeRequest.html';
    this.next();
  },
  action: function(){
    this.render('changeRequest');
  },
});

Router.route('settings',{
  templateLayout: 'settings',
  path: '/parents/settings',
  template: 'settings',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/parent.html';
    this.next();
  },
  action: function(){
    this.render('settings');
  },
});

Router.route('update-email',{
  templateLayout: 'update-email',
  path: '/parents/update-email',
  template: 'update-email',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/parent.html';
    this.next();
  },
  action: function(){
    this.render('update-email');
  },
});

Router.route('register_parent',{
  templateLayout: 'register_parent',
  path: '/parents/register_parent',
  template: 'register_parent',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/parent.html';
    this.next();
  },
  action: function(){
    this.render('register_parent');
  },
});


//<--------Facilitator Page Routes------------>


Router.route('attendence',{
 layoutTemplate:'attendence',
 path: '/facilitator/attendence',
 template: 'attendence',
 onBeforeAction: function(){
   import '../imports/ui/Facilitator/attendence.html';
   this.next();
 },
 action: function(){
  this.render('attendence');
 },
});

Router.route('addGroup',{
  templateLayout: 'addGroup',
  path: '/facilitator/addGroup',
  template: 'addGroup',
  onBeforeFunction: function(){
    import '../imports/ui/Facilitator/addGroup.html';
    this.next();
  },
  action: function(){
    this.render('addGroup');
  },
});

//<----------------Admin Page Routes----------------->

Router.route('admin', {
  templateLayout: 'admin',
  path: '/admin',
  template: 'admin',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/admin.html';
    this.next();
  },
  action: function(){
    this.render('admin');
  },
 });

 Router.route('atten',{
  templateLayout: 'atten',
  path: '/admin/atten',
  template: 'atten',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/atten.html';
    this.next();
  },
  action: function(){
    this.render('atten');
  },
});

Router.route('dashboard',{
  templateLayout: 'dashboard',
  path: '/admin/dashboard',
  template: 'dashboard',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/dashboard.html';
    this.next();
  },
  action: function(){
    this.render('dashboard');
  },
});

Router.route('satisfaction',{
  templateLayout: 'satisfaction',
  path: '/admin/satisfaction',
  template: 'satisfaction',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/satisfaction.html';
    this.next();
  },
  action: function(){
    this.render('satisfaction');
  },
});

Router.route('facilitators',{
  templateLayout: 'facilitators',
  path: '/admin/facilitators',
  template: 'facilitators',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/facilitators.html';
    this.next();
  },
  action: function(){
    this.render('facilitators');
  },
});


//<-------------Login Template Route------------->

Router.route('login',{
  templateLayout: 'login',
  path: '/home/login',
  template: 'login',
  onBeforeFunction: function(){
    import '../imports/ui/Login/login.html';
    this.next();
  },
  action: function(){
    this.render('login');
  },
});


//<--------------------LGA Page Routes------------------->


Router.route('lgaDashboard',{
  templateLayout: 'lgaDashboard',
  path: '/lga/lgaDashboard',
  template: 'lgaDashboard',
  onBeforeFunction: function(){
    import '../imports/ui/LGA/lgaDashboard.html';
    this.next();
  },
  action: function(){
    this.render('lgaDashboard');
  },
});

Router.route('allFacilitators',{
  templateLayout: 'allFacilitators',
  path: '/lga/allFacilitators',
  template: 'allFacilitators',
  onBeforeFunction: function(){
    import '../imports/ui/LGA/allFacilitators.html';
    this.next();
  },
  action: function(){
    this.render('allFacilitators');
  },
});

Router.route('addFacilitators', {
  templateLayout: 'addFacilitators',
  path: '/lga/addFacilitators',
  template: 'addFacilitators',
  onBeforeFunction: function(){
    import '../imports/ui/LGA/addFacilitators.html';
    this.next();
  },
  action: function(){
    this.render('addFacilitators');
  },
});

Router.route('viewRecords',{
  templateLayout: 'viewRecords',
  path: '/lga/viewRecords',
  template: 'viewRecords',
  onBeforeFunction: function(){
    import '../imports/ui/LGA/viewRecords.html';
    this.next();
  },
  action: function(){
    this.render('viewRecords');
  },
});

Router.route('sessionChangeRequest',{
  templateLayout: 'sessionChangeRequest',
  path: '/lga/sessionChangeRequest',
  template: 'sessionChangeRequest',
  onBeforeFunction: function(){
    import '../imports/ui/LGA/sessionChangeRequest.html';
    this.next();
  },
  action: function(){
    this.render('sessionChangeRequest');
  },
});


// Router.route('/genSettings', function (){
//   this.render('genSettings');
// });

