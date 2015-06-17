Meteor.publish("upcomingLunches", function(){
    var now = new Date();
    var six_hours_ago = new Date(now.getTime() - (3600000*6));

  return Event.find({type:"lunch",date:{$gte:six_hours_ago}});
});
