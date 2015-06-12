Template.lunch_panel.helpers({
  prettyDate:function(){
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = this.date;

    return weekdays[date.getDay()] + ", " + date.getDate() + "." + (date.getMonth() + 1);
  },

  numberAttending:function(){
    return this.attending.length;
  },

  isAttending:function(){
    var result = false;
    this.attending.forEach(function(u){
      if(u._id === Meteor.userId()) result = true;
    });

    return result;
  },

  isCreator:function(){
    return this.creator === Meteor.userId();
  },

  numberUnpaid:function(){
    var att = this.attending;
    var unpaid = [];
    att.forEach(function(obj){
      if (!obj.paid) {
        unpaid.push(obj);
      }
    });

    return unpaid.length;
  },

  hasPaid:function(){
    if (this._paid) {
      return "checked";
    } else {
      return "";
    }
  }


});

Template.lunch_panel.events({
  'click #attend':function(event,template){
    event.preventDefault();

    Meteor.call("addAttendee", this._id, function(error, result){
      if(error){
        console.log("error", error);
      }
    });
  },

  'click #cancelAttending':function(event,template){
    event.preventDefault();

    Meteor.call("removeAttendee", this._id, function(error, result){
      if(error){
        console.log("error", error);
      }
    });
  },

  'click #updateEvent':function(event,template){

    Session.set("updateEvent",this._id);
  },

  'click #paid':function(event,template){

    var value = this.paid ? false : true;

    Meteor.call("paidForEvent", Template.instance().data._id,this._id,value, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){

      }
    });
  }
});
