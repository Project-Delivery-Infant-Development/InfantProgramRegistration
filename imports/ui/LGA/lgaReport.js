import { Template } from 'meteor/templating';
import './lgaReport.html';
import '../Others/routes.js';

import { Satisfactiondata } from '../../api/task.js';


if(Meteor.isClient) {
  Meteor.startup(function() {
    if (!Satisfactiondata.find({}).fetch().length) {
        Satisfactiondata.insert({x: 'Yes', value: 63});
        Satisfactiondata.insert({x: 'No', value: 72});
        Satisfactiondata.insert({x: 'Not Known', value: 14});
     }
  });
}


var chart;
Template.lgaReport.rendered=function(){
    var container = this.find("#container");
    var data = Satisfactiondata.find({}).fetch();
chart = anychart.pie(data);
chart.title('PIE chart for overall percentage of attendence in different sessions');

chart.legend()
    .position('bottom')
    .itemsLayout('horizontal')
    .align('center')
    .title('attendence percentage');

chart.animation(true);
chart.container(container).draw();
}

