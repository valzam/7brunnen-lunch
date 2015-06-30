Meteor.publish("upcomingLunches", function(){
    var now = new Date();
    var six_hours_ago = new Date(now.getTime() - (3600000*12));

    return Events.find({type:"lunch",date:{$gte:six_hours_ago}},{sort:{date:1}});
});

Meteor.publish("pastLunches", function(){
    var now = new Date();
    var six_hours_ago = new Date(now.getTime() - (3600001*12));

    return Events.find({type:"lunch",date:{$lte:six_hours_ago}},{sort:{date:-1}});
});

Meteor.publish("publicProfile", function(){
  return Meteor.users.find({},{
    field:{
      profile:1
    }
  });
});

Meteor.publish("ownProfile", function(){
  return Meteor.users.find({_id:this.Id});
});
