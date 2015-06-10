Meteor.publish("lunches", function(){
  return Event.find({type:"lunch"});
});
