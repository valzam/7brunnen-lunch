Template.upcoming_lunches.onCreated(function(){
  this.subscribe("upcomingLunches");
});


Template.upcoming_lunches.helpers({
  lunch:function(){
    return Events.find({});
  },

  hasLunches:function(){
    return Events.find({}).count() > 0;
  }
});
