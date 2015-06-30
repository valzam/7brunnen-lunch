Template.main.onCreated(function(){
   this.view = new ReactiveVar("upcoming_lunches");
});

Template.main.helpers({
  view: function(){
    return Template.instance().view.get();
  },

  active: function(view){
    if (Template.instance().view.get() === view) {
      return "active";
    }
  }
});

Template.main.events({
  "click .view": function(event, template){
    Template.instance().view.set(event.currentTarget.id);
  }
});
