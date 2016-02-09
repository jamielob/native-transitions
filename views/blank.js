if (Meteor.isClient) {

	Template.blank.onRendered(function() {
		nt.noHeader = true;
		nt.noTabs = true;
		nt.transition();
	});

}

