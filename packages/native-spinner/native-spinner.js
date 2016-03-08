nativeSpinner = {};

nativeSpinner.spin = function(text, noTimeout) {



	if (Meteor.isCordova) {
		SpinnerPlugin.activityStart(text);

		//Add's safety timer, that stops the spinner after x seconds no matter what
		if (!noTimeout) {
			spinnerTimeout = Meteor.setTimeout(function() {
				SpinnerPlugin.activityStop();
			}, 5000);
		}
		
	}

}

nativeSpinner.stop = function() {

	if (Meteor.isCordova) {
		SpinnerPlugin.activityStop();
		clearTimeout(spinnerTimeout);
	}

}

