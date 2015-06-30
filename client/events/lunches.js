Template.lunches.onCreated(function(){
  this.subscribe("upcomingLunches");
});


Template.lunches.helpers({
  lunch:function(){
    return Events.find({});
  },

  hasLunches:function(){
    return Events.find({}).count() > 0;
  }
});
