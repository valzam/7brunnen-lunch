Meteor.publish("upcomingLunches", function(){
    var now = new Date();
    var twelve_hours_ago = new Date(now.getTime() - (3600000*12));

    return Events.find({type:"lunch",date:{$gte:twelve_hours_ago}},{sort:{date:1}});
});

Meteor.publish("pastLunches", function(limit){
    var now = new Date();
    var twelve_hours_ago = new Date(now.getTime() - (3600001*12));

    return Events.find({type:"lunch",date:{$lte:twelve_hours_ago}},{sort:{date:-1}},{limit:limit});
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
