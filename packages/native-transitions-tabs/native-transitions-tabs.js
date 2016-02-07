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
	Session.setDefault('ntShowContent', 'nt-show-tab1');

	// Watch tab pages changes
	Tracker.autorun(function () {
		//Get the current tab param
		var tab = FlowRouter.getQueryParam("tab");
		if (tab) {
			//Convert the to the class name
			var tabClass = 'nt-' + tab;
			//Check if the the class is any different to the current tab set (if it's not, we're just going back in history and don't need to do anything)
			if (tabClass !== Session.get('ntCurrentTab')) {
				//Set the current tabe to the current param
				Session.set('ntCurrentTab', 'nt-' + tab);
				//Reset the show content var (so we can show a loading spinner)
				Session.set('ntShowContent', '');
				//By deferring this, the inital transition between tabs is instant, no matter how big the fui-scroll dom is
				Meteor.defer(function() {
					//Set the show content session to the class name
					Session.set('ntShowContent', 'nt-show-' + tab);
				});
		 	}
 		}
	});

	//Add transition() to empty placeholder - used so that native transitons work when going ot the tabs, which are really just always there in the background
	Template.ntPlaceholder.onRendered(function() {
		nt.transition();
	});

	Template.registerHelper('ntCurrentTab', function() {
		return Session.get('ntCurrentTab');
	});

	Template.registerHelper('ntShowContent', function() {
		return Session.get('ntShowContent');
	});


}
