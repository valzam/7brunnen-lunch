Template.past_lunches.onCreated(function(){
  this.subscribe("pastLunches");
});


Template.past_lunches.helpers({
  lunch:function(){
    return Events.find({});
  },

  hasLunches:function(){
    return Events.find({}).count() > 0;
  }
});
