Template.lunches.onCreated(function(){
  this.subscribe("upcommingLunches");
});


Template.lunches.helpers({
  lunch:function(){
    return Event.find({},{sort:{date:1}});
  },

  hasLunches:function(){
    return Event.find({}).count() > 0;
  }
});
