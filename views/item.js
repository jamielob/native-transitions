if (Meteor.isClient) {

	Template.item.onRendered(function() {
		nt.noHeader = true;
		nt.noTabs = true;
		nt.transition();
	});

}

