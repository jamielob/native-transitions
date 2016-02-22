if (Meteor.isCordova) {
	//Set the fixedPixelTop to the height of the header
	nt.defaults.fixedPixelsTop = 44;
	//Makes the transition pretty
	//nt.defaults.fadeHeader = true;

	//Check for no-header clicks
	$(document)
		.on('click', '.nt-no-header a', function(event) {
			//Disable the fixedPixelTop for the next transition
			nt.fixedPixelsTop = 0;
		});
}