Template.lunch_panel.onCreated(function(){
  this.view = new ReactiveVar('overview');
});

Template.lunch_panel.helpers({
  event: function(){
    return Template.instance().data;
  },

  view: function(){
    return Template.instance().view.get();
  },

  active: function(name){
    if (Template.instance().view.get() === name) {
      return "active-view";
    }
  },

  numberComments: function(){
    return this.comments.length;
  }

});

Template.lunch_panel.events({
  'click #attend':function(event,template){
    event.preventDefault();

    Meteor.call("addAttendee", this._id, function(error, result){
      if(error){
        console.log("error", error);
      }
    });
  },

  'click .event-view': function(event,template){
    event.preventDefault();

    Template.instance().view.set(event.currentTarget.id);
  }

});
