import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';


import './atten.js';
import './admin.js';
import { DataSource } from './DataSource.js';
import { DataSource1 } from './DataSource.js';
import './dashboardAdmin.html';
import '../Others/routes.js';
import '../Others/feed.js';


var chart;
var chart1;
Template.dashboardAdmin.rendered=function(){
    var container = this.find("#container");
    var data = DataSource.find({}).fetch();
    var data1 = DataSource1.find({}).fetch();
chart = anychart.pie(data);
chart.title('PIE chart for overall percentage of attendence in different sessions');

chart.legend()
    .position('bottom')
    .itemsLayout('horizontal')
    .align('center')
    .title('attendence percentage');

chart.animation(true);
chart.container(container).draw();
chart1= anychart.bar(data1);
chart1.title('Bar chart for satisfaction survey in different sessions');

chart1.legend()
    .position('bottom')
    .itemsLayout('horizontal')
    .align('center')
    .title('attendence percentage');

chart1.animation(true);
chart1.container(container1).draw();
}

