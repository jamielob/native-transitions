if (Meteor.isClient) {

	Template.home.onRendered(function() {
		nt.transition();
	});

}

