if (Meteor.isClient) {

	Template.registerHelper("list", function() {
		return _.range(100);
	});

}

