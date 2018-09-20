import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import '../imports/ui/Others/routes.js';
import '../imports/api/task.js';

Meteor.startup(() => {
//   Meteor.methods({
//     'saveFile': function(buffer){
//         Files.insert({data:buffer});        
//     },   
    
// });  
});
// import '../client/main.js';

// import { Tasks, user,parent,request,group, Sessions, lga, admin, facilitator } from '../imports/api/task.js';
// if (Meteor.isServer) {
//     Meteor.startup(function () {
//         // code to run on server at startup
//         // Simple if statement to check collection
//         //create user collection if not exist in db
//         if(user.find({}).fetch({})=="")
//         user.insert({
//             Id:"User001",
//             Password: "Pass",
//             fname: "",
//             lname: "",
//             address: "",
//             pcode: "",
//             phone: "",
//             email: "",
//             photo: "",
//             role: "",
//             status: "",
//             lastPassUpdate:""
//         });
        
//         //create parent collection if not exist in db
//         if(parent.find({}).fetch({})=="")
//         parent.insert({
//             Id:"PA001",
//             ChildAge:"3",
//             GroupId:"G001",
//             S1:"13-12-2018",
//             S2:"09-03-2019",
//             S3:"05-06-2019",
//             S4:"",
//             S5:"",
//             S6:"",
//             Reminders:"Yes",
//             Reg_Sessions:"",
//             Attended_Sessions:"",
//             LgaId:""
//         });
//         //create request collection if not exist in db
//         if(request.find({}).fetch({})=="")
//         request.insert({
//             From:"PA001",
//             Type:"Change of Session",
//             DateFrom:"13-12-2018",
//             DateTo:"13-03-2018",
//             Remarks:"Request for Change"
//         });
//         //create lga collection if not exist in db
//         if(lga.find({}).fetch({})=="")
//         lga.insert({
//             LgaId : "LG001" ,
//             Address : "" ,
//             Pcode : "3056" ,
//             Phone : "" ,
//             Email : "" ,
//             Sess_Mode : "4 Session" 
//         });
//         //create group collection if not exist in db
//         if(group.find({}).fetch({})=="")
//         group.insert({
//             GroupId	: " G001",
//             Name:"Group One",
//             TotalSlots	:"20",
//             FreeSlots	:"",
//             Sess_Mode	:"4 Session"    
//         });
//         //create session collection if not exist in db
//         if(Sessions.find({}).fetch({})=="")
//         session.insert({
//             Session_Id:"G1S001",
//             For:"3 Months",
//             GroupId:"G001",
//             facilitator:"F001",
//             Date:"19-12-2018",
//             Location:"ABc XXXX",
//             Status:"Planned",
//             T_Registered:"20",
//             T_Attended:""
//         });
//         //create admin collection if not exist in db
//         if(admin.find({}).fetch({})=="")
//         admin.insert({
//             Id	: " A001",
//             LgaId:"LG001",
//         });
//         //create facilitator collection if not exist in db
//         if(facilitator.find({}).fetch({})=="")
//         facilitator.insert({
//             Id	: " A001",
//             No_of_Sessions:"20",
//             LgaId:"LG001"
//         });

        

//     });
// }