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




     FlowRouter.route('/items', {
      name: 'items',
      action: function() {
         BlazeLayout.render('items');
      }
    });

      FlowRouter.route('/blank', {
      name: 'blank',
      action: function() {
         BlazeLayout.render('blank');
      }
    });

    FlowRouter.route('/text', {
      name: 'text',
      action: function() {
         BlazeLayout.render('text');
      }
    });

    FlowRouter.route('/buttons', {
      name: 'buttons',
      action: function() {
         BlazeLayout.render('buttons');
      }
    });

    FlowRouter.route('/utility', {
      name: 'utility',
      action: function() {
         BlazeLayout.render('utility');
      }
    });

     FlowRouter.route('/headers', {
      name: 'headers',
      action: function() {
         BlazeLayout.render('headers');
      }
    });

}