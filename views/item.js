if (Meteor.isClient) {

	Template.item.onRendered(function() {
		nt.fixedPixelsBottom = 0;
		nt.transition();
	});

}

