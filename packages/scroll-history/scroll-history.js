var scrollHistoryPositions = {};
var scrollHistoryHeights = {};
var isBack = false;

scrollHistory = function(jQueryObject, bothDirections) {

	//Get the current route
	var routeName = FlowRouter.current().path;

	//Check if it came from a back button
	if (isBack || bothDirections) {

		//Add a temp div so that the scrolling works even when all content isn't loaded
		jQueryObject.append('<div id="scrollHistoryTempDiv" style="height:10000px;"></div>');

		//Wait for Dom
		Meteor.defer(function() {

			//Scroll to the last position
			jQueryObject.scrollTop(scrollHistoryPositions[routeName]);

			//Remove the temp div
			Meteor.setTimeout(function() {
				jQueryObject.find('#scrollHistoryTempDiv').remove();
			}, 500);

			//Reset isBack
			isBack = false;

		});
	}

	
	//Monitor the scroll
	jQueryObject.scroll(function(event) {
		
		//Save the new position
		var scrollPosition = jQueryObject.scrollTop();
		scrollHistoryPositions[routeName] = scrollPosition;
		
		//Save the current height
		var scrollHeight = jQueryObject.outerHeight();
		scrollHistoryHeights[routeName] = scrollPosition;

	});

}

//Listen for back buttons
document.addEventListener("backbutton", function() {
	isBack = true;
	//Reset after 500ms - this means even pages that don't call the scrollHistory function will rest the direction correctly
	Meteor.setTimeout(function() {
		isBack = false;
	}, 500);
}, false);


Template.body.events({
	'click .nt-backButton': function () {
		isBack = true;
		//Reset after 500ms - this means even pages that don't call the scrollHistory function will rest the direction correctly
		Meteor.setTimeout(function() {
			isBack = false;
		}, 500);
	}
});