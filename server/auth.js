Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        if (user.services.facebook) {
          options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        } else if (user.services.twitter){
          options.profile.picture= user.services.twitter.profile_image_url;
        } else {
          options.profile.picture = '/default-pic';
        }
        user.profile = options.profile;
    }
    return user;
});
