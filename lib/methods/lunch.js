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
   check(lunch.date, Date);


   var l = _.extend(lunch,{
     type:'lunch',
     attending:[],
     comments:[],
     creator: Meteor.userId(),
     creatorName:Meteor.user().profile.name,
     createdAt: new Date()
   });

   Events.insert(l,function(err,lunch){
     if(err) throw new Meteor.Error('db-error');
     return lunch;
   });

 },

  updateLunch:function(lunch){
     if (!Meteor.user()) {
       throw new Meteor.Error('not-authorized');
     }

    check(lunch.price, String);
    check(lunch.starter, String);
    check(lunch.main, String);
    check(lunch.dessert, String);
    check(lunch.time, String);
    check(lunch.date, Date);


    Events.update({_id:lunch._id,creator:Meteor.userId()},{$set:{
      price:lunch.price,
      date:lunch.date,
      time:lunch.time,
      starter:lunch.starter,
      main:lunch.main,
      dessert:lunch.dessert
    }
    },function(err,lunch){
      if(err) throw new Meteor.Error('db-error');
      return lunch;
    });

  },
});
