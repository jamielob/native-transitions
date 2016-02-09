if (Meteor.isClient) {

	Template.buttons.onRendered(function() {
		nt.transition();
	});

}

