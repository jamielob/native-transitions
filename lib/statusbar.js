Meteor.startup(function() {
	if (Meteor.isCordova) {
		//Format the status bar
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.backgroundColorByHexString("#2f3339");
	}
});

