if (Meteor.isClient) {
    
    FlowRouter.route('/', {
      name: 'home',
      action: function() {
        BlazeLayout.render('home');
      }
    });


    FlowRouter.route('/profile/', {
      name: 'profile',
      action: function() {
         BlazeLayout.render('profile');
      }
    });

}