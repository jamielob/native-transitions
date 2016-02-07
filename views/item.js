if (Meteor.isClient) {

	Template.item.onRendered(function() {
		nt.transition();
	});

}

