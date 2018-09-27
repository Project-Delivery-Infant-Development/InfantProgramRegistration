import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Parent, User, Request, Groups, Session, Lga, Admin, Facilitator } from './task.js';

import './createDb.html';
import '../ui/Others/routes.js';


Template.body.helpers({
    parents(){
        return Parent.find({});
    },
    
});

Template.createDb.events({
        'submit .frmRequest': function(event){
        event.preventDefault();
        
        var option=event.target.option.value;
        console.log(option);
        if(option=="justcreate")
                    createDb();
        else if(option=="dropncreate")
        {
            dropDb();
            createDb();
        }   
        window.alert("Database Created Successfully..!");
    },

});

function dropDb()
{
    console.log(Meteor.call('removeData'));
}
//Database sample data entry code..
function createDb()
    {
        User.insert( 
            {
                _id:"PA001",
                Id:"PA001",
                Password: "default",
                fname: "PA",
                lname: "L",
                address: "string",
                pcode: 3056,
                phone: 1234567890,
                email: "demo@d.com",
                photo: "Url",
                role: "Parent",
                status: "Active",
                lastPassUpdate:new Date()
            });
        User.insert( 
            {
                _id:"PA002",
                Id:"PA002",
                Password: "default",
                fname: "PA",
                lname: "L",
                address: "string",
                pcode: 3056,
                phone: 1234567890,
                email: "demo@d.com",
                photo: "Url",
                role: "Parent",
                status: "Active",
                lastPassUpdate:new Date()
            });
        User.insert( 
            {
                _id:"PA003",
                Id:"PA003",
                Password: "default",
                fname: "PA",
                lname: "L",
                address: "string",
                pcode: 3056,
                phone: 1234567890,
                email: "demo@d.com",
                photo: "Url",
                role: "Parent",
                status: "Active",
                lastPassUpdate:new Date()
            });
        User.insert( 
            {
                _id:"AD001",
                Id:"AD001",
                Password: "default",
                fname: "PA",
                lname: "L",
                address: "string",
                pcode: 3056,
                phone: 1234567890,
                email: "demo@d.com",
                photo: "Url",
                role: "Admin",
                status: "Active",
                lastPassUpdate:new Date()
            });
        User.insert( 
            {
                _id:"AD002",
                Id:"AD002",
                Password: "default",
                fname: "PA",
                lname: "L",
                address: "string",
                pcode: 3056,
                phone: 1234567890,
                email: "demo@d.com",
                photo: "Url",
                role: "Admin",
                status: "Active",
                lastPassUpdate:new Date()
            });
        
        User.insert( 
            {
                _id:"FA001",
                Id:"FA001",
                Password: "default",
                fname: "PA",
                lname: "L",
                address: "string",
                pcode: 3056,
                phone: 1234567890,
                email: "demo@d.com",
                photo: "Url",
                role: "Facilitator",
                status: "Active",
                lastPassUpdate:new Date()
            });
        
        User.insert( 
            {
                _id:"FA002",
                Id:"FA002",
                Password: "default",
                fname: "PA",
                lname: "L",
                address: "string",
                pcode: 3056,
                phone: 1234567890,
                email: "demo@d.com",
                photo: "Url",
                role: "Facilitator",
                status: "Active",
                lastPassUpdate:new Date()
            });
            
            //Start: Parent table records............................................
        Parent.insert({
            _id:"PA001",
            Id:"PA001",
            ChildAge:3,
            GroupId:"G001",
            S1:new Date(),
            S2:new Date(2018,12,11),
            S3:new Date(2019,03,10),
            S4:new Date(2019,06,08),
            S5:new Date(2019,09,04),
            S6:new Date(2019,12, 01),
            Reminders:"Yes",
            Reg_Sessions:4,
            Attended_Sessions:0,
            LgaId:"LGA001"
        });


        Parent.insert({
            _id:"PA002",
            Id:"PA002",
            ChildAge:6,
            GroupId:"G002",
            S1:new Date(),
            S2:new Date(2018,12,11),
            S3:new Date(2019,03,10),
            S4:new Date(2019,06,08),
            S5:new Date(2019,09,04),
            S6:new Date(2019,12, 01),
            Reminders:"Yes",
            Reg_Sessions:4,
            Attended_Sessions:0,
            LgaId:"LGA002"
        });

        Parent.insert({
            _id:"PA003",
            Id:"PA003",
            ChildAge:3,
            GroupId:"G001",
            S1:new Date(),
            S2:new Date(2018,12,11),
            S3:new Date(2019,03,10),
            S4:new Date(2019,06,08),
            S5:new Date(2019,09,04),
            S6:new Date(2019,12, 01),
            Reminders:"Yes",
            Reg_Sessions:4,
            Attended_Sessions:0,
            LgaId:"LGA001"
        });

        //End: Parent table records............................................

        //Start: Request table records............................................
        Request.insert({
            _id:"Req001",
            From:"PA001",
            Type:"Session Change",
            DateFrom:new Date(),
            DateTo:new Date(2018,12,11),
            Remarks:"Request for Change"
        });

        Request.insert({
            _id:"Req002",
            From:"PA002",
            Type:"Access Request",
            DateFrom:new Date(),
            DateTo:new Date(2018,12,11),
            Remarks:"Request for Change"
        });

        Request.insert({
            _id:"Req003",
            From:"PA003",
            Type:"Session Change",
            DateFrom:new Date(),
            DateTo:new Date(2018,12,11),
            Remarks:"Request for Change"
        });

        //End: Request table records............................................

        //Start: LGA table records............................................
        Lga.insert({
            _id:"LGA001",
            LgaId : "LGA001" ,
            Address : "Address" ,
            Pcode : 3056,
            Phone : 1234567890,
            Email : "bc@bc.com" ,
            Sess_Mode : "4 Session" 
        });
        Lga.insert({
            _id:"LGA002",
            LgaId : "LGA002" ,
            Address : "Address" ,
            Pcode : 3057,
            Phone : 1234567890,
            Email : "bc@bc.com" ,
            Sess_Mode : "4 Session" 
        });
        Lga.insert({
            _id:"LGA003",
            LgaId : "LGA003" ,
            Address : "Address" ,
            Pcode : 3058,
            Phone : 1234567890,
            Email : "bc@bc.com" ,
            Sess_Mode : "4 Session" 
        });
        //End: LGA table records............................................

        //Start: Groups table records......................................
        Groups.insert({
            _id:"LGA001G001",
            GroupId	: " G001",
            Name:"Group One",
            LgaId:"LGA001",
            TotalSlots	:20,
            FreeSlots	:20,
            Sess_Mode	:"4 Session"    
        });
        Groups.insert({
            _id:"LGA002G002",
            GroupId	: " G002",
            Name:"Group Two",
            LgaId:"LGA002",
            TotalSlots	:20,
            FreeSlots	:20,
            Sess_Mode	:"4 Session"    
        });
        Groups.insert({
            _id:"LGA001G003",
            GroupId	: " G003",
            Name:"Group Three",
            LgaId:"LGA001",
            TotalSlots	:20,
            FreeSlots	:20,
            Sess_Mode	:"4 Session"    
        });

        //End: Groups table records......................................

        //Start: Session table records......................................
        Session.insert({
            _id:"G1S001",
            Session_Id:"G1S001",
            For:"3 Months",
            GroupId:"G001",
            Facilitator:"FA001",
            Date:new Date(),
            Location:"ABc XXXX",
            Status:"Planned",
            T_Registered:20,
            T_Attended:0
        });
        Session.insert({
            _id:"G1S002",
            Session_Id:"G1S002",
            For:"6 Months",
            GroupId:"G001",
            Facilitator:"FA002",
            Date:new Date(),
            Location:"ABc XXXX",
            Status:"Planned",
            T_Registered:20,
            T_Attended:0
        });
        Session.insert({
            _id:"G2S003",
            Session_Id:"G2S003",
            For:"3 Months",
            GroupId:"G002",
            Facilitator:"FA001",
            Date:new Date(),
            Location:"ABc XXXX",
            Status:"Planned",
            T_Registered:20,
            T_Attended:0
        });


        //End: Session table records......................................

        //Start: Admin table records......................................
        Admin.insert({
            _id:"AD001",
            Id	: " AD001",
            LgaId:"LGA001",
        });
        Admin.insert({
            _id:"AD002",
            Id	: " AD002",
            LgaId:"LGA002",
        });

        //End: Admin table records......................................


        //Start: Facilitator table records......................................
        Facilitator.insert({
            _id:"LGA001FA001",
            Id	: "FA001",
            No_of_Sessions:20,
            LgaId:"LGA001"
        });

        Facilitator.insert({
            _id:"LGA002FA002",
            Id	: "FA002",
            No_of_Sessions:20,
            LgaId:"LGA002"
        }); 

        Facilitator.insert({
            _id:"LGA001FA003",
            Id	: "FA003",
            No_of_Sessions:20,
            LgaId:"LGA001"
        }); 
        //End: Facilitator table records......................................

    }