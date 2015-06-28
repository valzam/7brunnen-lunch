Template.chat.onRendered(function(){
  Utils.instantScroll('.chat-panel');

  this.autorun(function(){
    var temp = Template.currentData().comments.length;
    Utils.autoScroll('.chat-panel');
  });

});

Template.chat.helpers({
  user:function(){
    return Meteor.users.findOne({_id:this.user});
  },

  timestamp: function(){
    if(this.createdAt){
      var date = this.createdAt;
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      var day = days[date.getDay()];
      var hour = date.getHours();
      var minutes = date.getMinutes();

      minutes = minutes < 10 ? "0" + minutes : minutes;

      return hour + ":" + minutes + ", " + day;
    }
  }
});

Template.chat.events({
  'submit #newComment':function(event,template){
    event.preventDefault();

    var comment = {
        content:$('#btn-input').val(),
        user:Meteor.userId()
    };

    Meteor.call("addComment", Template.instance().data._id,comment, function(error, result){
      if(error){
        console.log("error", error);
      }

      $('#btn-input').val("");
    });

  }
});
