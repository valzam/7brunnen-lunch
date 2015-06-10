Template.create_lunch.rendered=function() {
    $('#date').datepicker({
      autoclose:true,
      startDate: '+0d',
      orientation: 'top'
    });
};

Template.create_lunch.events({
  'click #create_lunch':function(event,template){
      event.preventDefault();

      var lunch = {
        date: $('#date').datepicker('getUTCDates')[0],
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
