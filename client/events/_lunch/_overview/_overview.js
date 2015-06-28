Template.overview.helpers({
  prettyDate:function(){
    var weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date = this.date;

    return weekdays[date.getDay()] + ", " + date.getDate() + "." + (date.getMonth() + 1);
  },

  numberAttending:function(){
    return this.attending.length;
  },

  isCreator:function(){
    return this.creator === Meteor.userId();
  },

  numberPaid:function(){
    var att = this.attending;
    var unpaid = 0;
    att.forEach(function(obj){
      if (obj.paid) {
        unpaid++;
      }
    });

    return unpaid;
  },

});

Template.overview.events({
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

  'click .paid':function(event,template){
    event.preventDefault();

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
