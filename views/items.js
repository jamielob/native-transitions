if (Meteor.isClient) {

	Template.items.onRendered(function() {
		nt.noHeader = true;
		nt.noTabs = true;
		nt.transition();
	});

}

