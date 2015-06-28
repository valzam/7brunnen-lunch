Template.lunches.onCreated(function(){
  this.subscribe("upcomingLunches");
});


Template.lunches.helpers({
  lunch:function(){
    return Events.find({},{sort:{date:1}});
  },

  hasLunches:function(){
    return Events.find({}).count() > 0;
  }
});
