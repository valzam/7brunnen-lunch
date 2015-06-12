Template.create_lunch.onRendered(function() {
    $('#date').datepicker({
      autoclose:true,
      startDate: '+0d',
      orientation: 'top',
      format: 'dd.mm.yyyy'
    });

});

Template.create_lunch.events({
  'click #create_lunch':function(event,template){
      event.preventDefault();
      var date = $('#date').datepicker('getUTCDates')[0];
      date.setHours(14);

      var lunch = {
        date:date,
        time: $('#time').val() || "12:30pm",
        starter: $('#starter').val() || "No starter",
        main: $('#main').val() || "No main",
        dessert: $('#dessert').val() || "No dessert",
        price: $('#price').val() || "For free",
      };

      if (!lunch.date) {
        return false;
      }

      Meteor.call("createLunch", lunch, function(error, result){
        if(error){
          console.log("error", error);
        }

        $('#date').val("");
        $('#time').val("12:30pm");
        $('#starter').val("No starter");
        $('#main').val("No main");
        $('#dessert').val("No dessert");
        $('#price').val("5€");

        $('#createLunch').modal('hide');

      });


  }
});
