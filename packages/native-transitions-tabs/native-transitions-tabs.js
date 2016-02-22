if (Meteor.isCordova) {
	//Set the fixedPixelBottom to the height of the tabs
	nt.defaults.fixedPixelsBottom = 50;

	//Check for no-tabs clicks
	$(document)
		.on('click', '.nt-no-tabs a', function(event) {
			//Disable the fixedPixelBottom for the next transition
			nt.fixedPixelsBottom = 0;
		});
}

if (Meteor.isClient) {

	//Set the default tab
	Session.setDefault('ntCurrentTab', 'nt-tab-1');

	//Watch tab pages changes
	Tracker.autorun(function () {
		//Get the current tab param
		var tab = FlowRouter.getQueryParam("nt-tab");
		var tabClass = 'nt-tab-' + tab;
		Session.set('ntCurrentTab', 'nt-tab-' + tab);		
	});

	//Add transition to empty placeholder - used so that native transitons work when going ot the tabs, which are really just always there in the background
	Template.ntPlaceholder.transition();

	//Current tab helper
	Template.registerHelper('ntCurrentTab', function() {
		return Session.get('ntCurrentTab');
	});


}
