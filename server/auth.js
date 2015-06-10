Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        if (user.services.facebook) {
          options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        } else if (user.services.twitter){
          options.profile.picture="http://api.twitter.com/1/users/profile_image/"+twitterInfo.screenName;
        } else {
          options.profile.picture = '/default-pic';
        }
        user.profile = options.profile;
    }
    return user;
});
