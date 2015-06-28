Meteor.startup(function(){
  Session.setDefault("updateEvent", null);
});

Meteor.subscribe("publicProfile");
Meteor.subscribe("ownProfile");

Template.registerHelper("isAttending", function(attending){
    var result = false;
    attending.some(function(u){
      if(u._id === Meteor.userId()) result = true;
    });

    return result;
});

window.autoscroll = function (elementSelector) {
  // Use timeout to allow for rendering to complete
  window.setTimeout(function () {
    var element = $(elementSelector);

    var height = element.prop('scrollHeight');

    element.animate({scrollTop: height}, 100);
  }, 100);
};
