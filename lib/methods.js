Meteor.methods({
  createLunch:function(lunch){
    if (!Meteor.user()) {
      throw new Meteor.Error('not-authorized');
    }

   check(lunch.price, String);
   check(lunch.starter, String);
   check(lunch.main, String);
   check(lunch.dessert, String);
   check(lunch.time, String);


   var l = _.extend(lunch,{
     type:'lunch',
     attending:[],
     creator: Meteor.userId(),
     createdAt: new Date()
   });

   Event.insert(l,function(err,lunch){
     if(err) throw new Meteor.Error('db-error');
     return lunch;
   });

 },

 addAttendee:function(event){
   if (!Meteor.user()) {
     throw new Meteor.Error('not-authorized');
   }

   var user = {
     _id:Meteor.userId(),
     picture:Meteor.user().profile.picture,
     name:Meteor.user().profile.name
   };

   Event.update({_id:event},{$addToSet:{attending:user}});
 },

 removeAttendee:function(event){
     if (!Meteor.user()) {
       throw new Meteor.Error('not-authorized');
     }

     Event.update({_id:event},{$pull:{attending:{_id:Meteor.userId()}}});
 }
});
