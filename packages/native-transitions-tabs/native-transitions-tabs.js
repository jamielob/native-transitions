if (Meteor.isCordova) {
	//Set the fixedPixelBottom to the height of the tabs
	nt.defaults.fixedPixelsBottom = 50;
	nt.fixedPixelsBottom = nt.defaults.fixedPixelsBottom;

	//Check for no-tabs clicks
	$(document)
		.on('click', '.nt-no-tabs a', function(event) {
			//Disable the fixedPixelBottom for the next transition
			nt.fixedPixelsBottom = 0;
		});
}

if (Meteor.isClient) {

	Session.setDefault('ntCurrentTab', 'nt-tab-1');

	// Watch tab pages changes
	Tracker.autorun(function () {
		//Get the current tab param
		var tab = FlowRouter.getQueryParam("nt-tab");
		var tabClass = 'nt-tab-' + tab;
		Session.set('ntCurrentTab', 'nt-tab-' + tab);		
	});

	//Add transition() to empty placeholder - used so that native transitons work when going ot the tabs, which are really just always there in the background
	Template.ntPlaceholder.onRendered(function() {
		nt.transition();
	});

	Template.registerHelper('ntCurrentTab', function() {
		return Session.get('ntCurrentTab');
	});


}
