Template.lunches.onRendered(function(){
  this.subscribe("lunches");
});

Template.lunches.helpers({
  lunch:function(){
    return Event.find({type:"lunch",date:{$gte:new Date()}},{sort:{date:1}});
  }
});
