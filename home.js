if (Meteor.isClient) {

	Template.home.onRendered(function() {
		nt.transition();
		
	});


	Template.profile.onRendered(function() {
		nt.transition();

	});

}

