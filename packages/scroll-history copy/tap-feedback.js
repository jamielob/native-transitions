Template.body.events({

	'touchstart .tap-feedback': function (event, template) {
		tapFeedbackDelay = Meteor.setTimeout(function() {
			$(event.currentTarget).addClass('tap-feedback-active');
		}, 25);
	},

	'touchmove .tap-feedback': function (event, template) {
		clearTimeout(tapFeedbackDelay);
		$(event.currentTarget).removeClass('tap-feedback-active');
	},

	'touchend .tap-feedback': function (event, template) {
		clearTimeout(tapFeedbackDelay);
		Meteor.setTimeout(function() {
			$(event.currentTarget).removeClass('tap-feedback-active');
		}, 25);
	}

});