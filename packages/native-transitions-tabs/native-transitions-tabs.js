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

	Session.setDefault('ntCurrentTab', 'nt-tab1');

	// Watch tab pages changes
	Tracker.autorun(function () {
		var tab = FlowRouter.getQueryParam("tab");
		if (tab) {
			Session.set('ntCurrentTab', 'nt-' + tab);
			// var div = document.getElementById(tab);
			// if (div) {
			// 	div.className += " nt-tab-container-current";
	 			//$('#' + tab).addClass('nt-tab-container-current').siblings('.nt-tab-container').removeClass('nt-tab-container-current');
	 			//$('#' + tab).css({'display':'block'});
	 		// }
 		}
	});

	//Add transition() to empty placeholder - used so that native transitons work when going ot the tabs, which are really just always there in the background
	Template.ntPlaceholder.onRendered(function() {
		nt.transition();
	});

	Template.registerHelper('ntCurrentTab', function() {
		return Session.get('ntCurrentTab');
	});

}
