if (Meteor.isCordova) {

	//Set defaults
		
	//Default transition - options are slide, flip, fade
	Session.setDefault('ntDefaultTransition', 'slide');
	
	//Default transition direction - options are left, right, up, down, depending on the transition type
	Session.setDefault('ntDefaultDirection', 'left');
	
	//Default back transition direction
	Session.setDefault('ntDefaultBackDirection', 'right');

	//Default transition duration
	Session.setDefault('ntDefaultDuration', '350');
	
	//Set the initial values to the defaults
	Session.setDefault('ntTransition', Session.get('ntDefaultTransition'));
	Session.setDefault('ntDirection', Session.get('ntDefaultDirection'));
	Session.setDefault('ntDuration', Session.get('ntDefaultDuration'));

	Meteor.startup(function() {
		
		document.addEventListener("backbutton", function() {
			//Set the direction to the default back direction
			Session.set('ntDirection', Session.get('ntDefaultBackDirection'));
			//Navigate back
			window.history.back();
		}, false);

		//Check for direction and duration changes on click
		$(document)
			.on('click', '[data-ntTransition]', function(event) {
				var ntTransition = $(event.currentTarget).data('nttransition');  //Camel case is removed in data
				Session.set('ntTransition', ntTransition);
			})
			.on('click', '[data-ntDirection]', function(event) {
				var ntDirection = $(event.currentTarget).data('ntdirection'); //Camel case is removed in data
				Session.set('ntDirection', ntDirection);
			})
			.on('click', '[data-ntDuration]', function(event) {
				var ntDuration = $(event.currentTarget).data('ntduration'); //Camel case is removed in data
				Session.set('ntDuration', ntDuration);
			});
	
	});

}

nt = {};

nt.transition = function(completed) {
	if (Meteor.isCordova) {
		//Set up options for this transition
		var options = {
					   "direction"        : Session.get('ntDirection'), // 'left|right|up|down', default 'left' (which is like 'next')
					   "duration"         : Session.get('ntDuration'), // in milliseconds (ms), default 400
					   "iosdelay"         :  0, // ms to wait for the iOS webview to update before animation kicks in, default 60
					   "androiddelay"     :  0, // same as above but for Android, default 70
					   //"slowdownfactor"   :    -1, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
					   //"slidePixels"      :   -1, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page
					   //"winphonedelay"    :  250, // same as above but for Windows Phone, default 200,
					   //"fixedPixelsTop"   :    0, // the number of pixels of your fixed header, default 0 (iOS and Android)
					   //"fixedPixelsBottom":   60  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
		};
		//Init transition
		window.plugins.nativepagetransitions[Session.get('ntTransition')](
			options,
			//Check for completed callback
			function () { if (completed) completed(); },
			//Check for error
			function (error) { if (error) console.log('Native Transitions Error:' + error) },
		);	

		// window.plugins.nativepagetransitions.executePendingTransition(
		//   function (msg) {}, // called when the animation has finished
		//   function (msg) {)} // called in case you pass in weird values
		// );

		//Reset all to default
		Session.set('ntTransition', Session.get('ntDefaultTransition'));
		Session.set('ntDirection', Session.get('ntDefaultDirection'));
		Session.set('ntDuration', Session.get('ntDefaultDuration'));

	}
}
