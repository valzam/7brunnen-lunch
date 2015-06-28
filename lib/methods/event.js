Meteor.methods({
  deleteEvent:function(event){
    check(event, String);

     if (!Meteor.user()) {
       throw new Meteor.Error('not-authorized');
     }

     Events.remove({_id:event,creator:Meteor.userId()});
  },

 addAttendee:function(event){
   check(event, String);

   if (!Meteor.user()) {
     throw new Meteor.Error('not-authorized');
   }

   var user = {
     _id:Meteor.userId(),
     picture:Meteor.user().profile.picture,
     name:Meteor.user().profile.name
   };

   Events.update({_id:event},{$addToSet:{attending:user}});
 },

 removeAttendee:function(event){
    check(event, String);

     if (!Meteor.user()) {
       throw new Meteor.Error('not-authorized');
     }

     Events.update({_id:event},{$pull:{attending:{_id:Meteor.userId()}}});
 },

 paidForEvent:function(event,attendee,value){
    check(event, String);
    
     if (!Meteor.user()) {
       throw new Meteor.Error('not-authorized');
     }


     Events.update({_id:event,creator:Meteor.userId(),"attending._id":attendee},{$set:{"attending.$.paid":value}} );
 }


});
