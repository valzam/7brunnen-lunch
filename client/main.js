Meteor.startup(function(){
  Session.setDefault("updateEvent", null);
  Meteor.subscribe("publicProfile");
  Meteor.subscribe("ownProfile");

});

Template.registerHelper("isAttending", function(attending){
    var result = attending.some(function(u){
      return u._id === Meteor.userId();
    });

    return result;
});

// Global Object for utility functions
Utils = {};

Utils.autoScroll = function (elementSelector) {

    var element = $(elementSelector);
    var height = element.prop('scrollHeight');

    element.animate({scrollTop: height}, 800);
};

Utils.instantScroll = function (elementSelector) {

    var element = $(elementSelector);
    var height = element.prop('scrollHeight');

    element.prop('scrollTop',height);
};
