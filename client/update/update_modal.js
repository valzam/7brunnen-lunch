Template.update_lunch.onRendered(function() {
    $('#date_update').datepicker({
      autoclose:true,
      startDate: '+0d',
      orientation: 'top',
      format: 'dd.mm.yyyy'

    });

    this.autorun(function(){
      if (Session.get('updateEvent')) {
        var date = Event.findOne({_id:Session.get("updateEvent")});
        if (date) {
          date = date.date;
          $('#date_update').datepicker('setUTCDates',date);
        }
      }

    });

});

Template.update_lunch.helpers({
  event:function(){
    return Event.findOne({_id:Session.get("updateEvent")});
  }
});

Template.update_lunch.events({
  'click #update_lunch':function(event,template){
      event.preventDefault();

      var date = $('#date').datepicker('getUTCDates')[0];
      date.setHours(14);

      var lunch = {
        _id:Session.get("updateEvent"),
        date: date,
        time: $('#time_update').val() || "12:30pm",
        starter: $('#starter_update').val() || "No starter",
        main: $('#main_update').val() || "No main",
        dessert: $('#dessert_update').val() || "No dessert",
        price: $('#price_update').val() || "For free",

      };

      if (!lunch.date) {
        return false;
      }

      Meteor.call("updateLunch", lunch, function(error, result){
        if(error){
          console.log("error", error);
        }

        $('#updateLunch').modal('hide');
        Session.set("updateEvent",null);
      });
  },

  'click #delete_event':function(event,tempalte){
    event.preventDefault();

    Meteor.call("deleteEvent", Session.get("updateEvent"), function(error, result){
      if(error){
        console.log("error", error);
      }
        $('#updateLunch').modal('hide');
        Session.set("updateEvent",null);
    });
  }
});
