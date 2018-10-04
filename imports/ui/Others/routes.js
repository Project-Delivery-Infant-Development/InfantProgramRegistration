
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

Router.route('genSettings',{
  templateLayout: 'genSettings',
  path: '/parents/Settings',
  template: 'genSettings',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/genSettings.html';
    this.next();
  },
  action: function(){
    this.render('genSettings');
  },
});

Router.route('changePwd',{
  templateLayout: 'changePwd',
  path: '/parent/changePwd',
  template: 'changePwd',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/changePwd.html';
    this.next();
  },
  action: function(){
    this.render('changePwd');
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

Router.route('registerParent',{
  templateLayout: 'registerParent',
  path: '/parents/registerParent',
  template: 'registerParent',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/registerParent.html';
    this.next();
  },
  action: function(){
    this.render('registerParent');
  },
});

Router.route('parentGetSession',{
  templateLayout: 'parentGetSession',
  path: '/parents/parentGetSession',
  template: 'parentGetSession',
  onBeforeFunction: function(){
    import '../imports/ui/Parent/parentGetSession.html';
    this.next();
  },
  action: function(){
    this.render('parentGetSession');
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


Router.route('googlemaps',{
  templateLayout: 'googlemaps',
  path: '/admin/googlemaps',
  template: 'googlemaps',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/googlemaps.html';
    this.next();
  },
  action: function(){
    this.render('googlemaps');
  },
});

Router.route('addsession',{
  templateLayout: 'addsession',
  path: '/admin/addsession',
  template: 'addsession',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/addsession.html';
    this.next();
  },
  action: function(){
    this.render('addsession');
  },
});

Router.route('sessionlist',{
  templateLayout: 'sessionlist',
  path: '/admin/sessionlist',
  template: 'sessionlist',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/sessionlist.html';
    this.next();
  },
  action: function(){
    this.render('sessionlist');
  },
});

Router.route('dashboardAdmin',{
  templateLayout: 'dashboardAdmin',
  path: '/admin/dashboardAdmin',
  template: 'dashboardAdmin',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/dashboardAdmin.html';
    this.next();
  },
  action: function(){
    this.render('dashboardAdmin');
  },
});

Router.route('add_facilitator',{
  templateLayout: 'add_facilitator',
  path: '/admin/add_facilitator',
  template: 'add_facilitator',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/add_facilitator.html';
    this.next();
  },
  action: function(){
    this.render('add_facilitator');
  },
});

Router.route('facilitatorlist',{
  templateLayout: 'facilitatorlist',
  path: '/admin/facilitatorlist',
  template: 'facilitatorlist',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/facilitatorlist.html';
    this.next();
  },
  action: function(){
    this.render('facilitatorlist');
  },
});

Router.route('admin_lga',{
  templateLayout: 'admin_lga',
  path: '/admin/admin_lga',
  template: 'admin_lga',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/admin_lga.html';
    this.next();
  },
  action: function(){
    this.render('admin_lga');
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

Router.route('viewlga',{
  templateLayout: 'viewlga',
  path: '/admin/viewlga',
  template: 'viewlga',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/viewlga.html';
    this.next();
  },
  action: function(){
    this.render('viewlga');
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

Router.route('lgaReport',{
  templateLayout: 'lgaReport',
  path: '/lga/reports',
  template: 'lgaReport',
  onBeforeFunction: function(){
    import '../imports/ui/LGA/lgaReport.html';
    this.next();
  },
  action: function(){
    this.render('lgaReport');
  },
});

Router.route('createDb',{
  templateLayout: 'createDb',
  path: '/admin/createDb',
  template: 'createDb',
  onBeforeFunction: function(){
    import '../imports/api/createDb.html';
    this.next();
  },
  action: function(){
    this.render('createDb');
  }
});
Router.route('addUser',{
  templateLayout: 'addUser',
  path: '/admin/addUser',
  template: 'addUser',
  onBeforeFunction: function(){
    import '../imports/ui/Admin/addUser.html';
    this.next();
  },
  action: function(){
    this.render('addUser');
  }
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
