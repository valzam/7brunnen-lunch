Meteor.publish("upcommingLunches", function(){
  return Event.find({type:"lunch",date:{$gte:new Date()}});
});
