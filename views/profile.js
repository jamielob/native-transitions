if (Meteor.isClient) {

	Template.profile.onRendered(function() {
		nt.transition();
	}); 

}

