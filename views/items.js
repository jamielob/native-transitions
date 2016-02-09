if (Meteor.isClient) {

	Template.items.onRendered(function() {
		nt.transition();
	});

}

