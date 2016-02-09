if (Meteor.isClient) {
    
    FlowRouter.route('/', {
      name: 'tabs',
      action: function() {
        //Set the default tab
        if (!FlowRouter.getQueryParam('nt-tab')) FlowRouter.setQueryParams({'nt-tab': 1 });
        //Render the placeholder
        BlazeLayout.render('ntPlaceholder');
      }
    });


    FlowRouter.route('/profile', {
      name: 'profile',
      action: function() {
         BlazeLayout.render('profile');
      }
    });

     FlowRouter.route('/item', {
      name: 'item',
      action: function() {
         BlazeLayout.render('item');
      }
    });

}