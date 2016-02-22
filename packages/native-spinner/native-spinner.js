nativeSpinner = {};

nativeSpinner.spin = function(text) {

	if (Meteor.isCordova) {
		SpinnerPlugin.activityStart(text);
	}

}

nativeSpinner.stop = function() {

	if (Meteor.isCordova) {
		SpinnerPlugin.activityStop();
	}

}

