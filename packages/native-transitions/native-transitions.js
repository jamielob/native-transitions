nt = {};

//Set defaults
nt.defaults = {};
	
//Default transition - options are slide, flip, fade
nt.defaults.type = 'slide'

//Default transition direction - options are left, right, up, down, depending on the transition type
nt.defaults.direction = 'left';

//Default back transition direction
nt.defaults.backDirection = 'right';

//Default transition duration
nt.defaults.duration = 350;

//Default delays
nt.defaults.iosdelay = 0;
nt.defaults.androiddelay = 0;

//Fixed pixels
nt.defaults.fixedPixelsTop = 0;
nt.defaults.fixedPixelsBottom = 0;

//Header and tabs flags
nt.defaults.noHeader = false;
nt.defaults.noTabs = false;

//Callbacks
nt.defaults.onCompleted = null;

nt.reset = function() {
	nt.type = nt.defaults.type;
	nt.direction = nt.defaults.direction;
	nt.duration = nt.defaults.duration;
	nt.iosdelay = nt.defaults.iosdelay;
	nt.androiddelay = nt.defaults.androiddelay;
	nt.fixedPixelsTop = nt.defaults.fixedPixelsTop;
	nt.fixedPixelsBottom = nt.defaults.fixedPixelsBottom;
	nt.noHeader = nt.defaults.noHeader;
	nt.noTabs = nt.defaults.noTabs;
	nt.onCompleted = nt.defaults.onCompleted;
}
	
if (Meteor.isCordova) {

	Meteor.startup(function() {

		//Set the initial values to the defaults
		nt.reset();
		
		document.addEventListener("backbutton", function() {
			//Set the direction to the default back direction
			nt.direction = nt.defaults.backDirection;
			//Navigate back
			window.history.back();
		}, false);

		//Check for type, direction and duration changes on click
		$(document)
			.on('click', '[nt-type]', function(event) {
				nt.type = $(event.currentTarget).attr('nt-type'); 
			})
			.on('click', '[nt-direction]', function(event) {
				nt.direction = $(event.currentTarget).attr('nt-direction');
			})
			.on('click', '[nt-duration]', function(event) {
				nt.duration = $(event.currentTarget).attr('nt-duration');
			})
			.on('click', '[nt-iosdelay]', function(event) {
				nt.iosdelay = $(event.currentTarget).attr('nt-iosdelay');
			})
			.on('click', '[nt-androiddelay]', function(event) {
				nt.androiddelay = $(event.currentTarget).attr('nt-androiddelay');
			})
			.on('click', '[nt-fixedPixelsTop]', function(event) {
				nt.fixedPixelsTop = $(event.currentTarget).attr('nt-fixedPixelsTop');
			})
			.on('click', '[nt-fixedPixelsBottom]', function(event) {
				nt.fixedPixelsBottom = $(event.currentTarget).attr('nt-fixedPixelsBottom');
			});
	
	});

}



nt.transition = function(completed) {

	//Notabs check outside of cordova so that they are hidden on desktop also
	if (nt.noTabs) {
		nt.fixedPixelsBottom = 0;
		//Be sure not to hide the tabs on the tab pages themselves (as they are always live)
		$('.nt-container').not('.nt-tab-container .nt-container').addClass('nt-no-tabs');
	}

	//Cordova check is inside function so that it isn't undefined on desktop
	if (Meteor.isCordova) {
	
		//Needs to be defered to give time for the click handlers to override any vars
		Meteor.defer(function() {

			
			//Check for the fadeHeader setting
			// if (nt.fadeHeader) {
			// 	//Get the header content
			// 	var $headerContent = $('.nt-header').not('.nt-tab-container .nt-header').children();
			// 	//Hide it
			// 	$headerContent.hide();
			// }

			//Check if noHeader flag is set
			if (nt.noHeader) {
				nt.fixedPixelsTop = 0;
				$('.nt-container').not('.nt-tab-container .nt-container').addClass('nt-no-header');
			}

			// console.log(nt);

			//Set up options for this transition
			var options = {
						   "direction"        : nt.direction, // 'left|right|up|down', default 'left' (which is like 'next')
						   "duration"         : nt.duration, // in milliseconds (ms), default 400
						   "iosdelay"         : nt.iosdelay, // ms to wait for the iOS webview to update before animation kicks in, default 60
						   "androiddelay"     : nt.androiddelay, // same as above but for Android, default 70
						   //"slowdownfactor" :  -1, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
						   //"slidePixels"    :  -1, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page
						   //"winphonedelay"  :  250, // same as above but for Windows Phone, default 200,
						   "fixedPixelsTop"   : nt.fixedPixelsTop, // the number of pixels of your fixed header, default 0 (iOS and Android)
						   "fixedPixelsBottom": nt.fixedPixelsBottom  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
			};
			//Init transition
			window.plugins.nativepagetransitions[nt.type](
				options,
				//Completed function
				function () { 

					//Check for the fadeHeader setting
					// if (nt.fadeHeader) {
					// 	//Fade in the header content
					// 	$headerContent.fadeIn('fast');
					// }

					//Check for completed callback
					if (nt.onCompleted) nt.onCompleted(); 
				},
				//Check for error
				function (error) { if (error) console.log('Native Transitions Error:' + error) },
			);	

			//Reset all to default
			nt.reset()

		});
	}
}
