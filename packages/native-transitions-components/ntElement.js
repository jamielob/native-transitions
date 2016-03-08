Template.body.events({
	'click [nt-target]': function (event, template) {
		//Get the target name
		var $ntElement = $(event.currentTarget);
		nt.triggerElement($ntElement);
	},
});

nt.triggerElement = function($ntElement) {

		ntTarget = $ntElement.attr('nt-target');

		//Hide any others that are showing
		var $ntOtherTargets = $('[nt-element]').not('[nt-element="' + ntTarget + '"]');
		if ( $ntOtherTargets.hasClass('nt-element-in') ) {
			$ntOtherTargets.removeClass('nt-element-in');
		}

		//Get the target element
		var $ntTarget = $('[nt-element="' + ntTarget + '"]');
		//If it's showing 
		if ( $ntTarget.hasClass('nt-element-in') ) {
			//If the element has an href, hide it immediately
			if( $ntElement.attr("href") ) {
				$ntTarget.removeClass('nt-element-in').removeClass('nt-element-out');
			} else {

				//Otherwise animate it out of view
				$ntTarget.addClass('nt-element-out').removeClass('nt-element-in').on("animationend oAnimationEnd webkitAnimationEnd", function(event) {
					//Make sure it's only on the out animation
					if (!$(event .currentTarget).hasClass('nt-element-out')) return;
					$(this).off("animationend oAnimationEnd webkitAnimationEnd");	
					//Removing the class onon end so we can hide the overlay easily using css
					$(this).removeClass('nt-element-out')
				});
			}

			//Need to move to using js on mobile because of CSS flicker (reduced using fix already implemented)
			//http://stackoverflow.com/questions/17747239/ios-flicker-bug-when-the-css-overflowscroll-is-changed-to-overflowhidden
			//But couldn't figure out a way of doing it cleanly, so leaving it as CSS with flicker for now
			//Don't implement the same delay below up here, as it takes too long to re-implement scrolling that way.
			$('.nt-current .nt-content').not('.nt-element .nt-content').css('overflow-y', '')
			

		//Otherwise
		} else {
			//Animate it in to view
			$ntTarget.addClass('nt-element-in').removeClass('nt-element-out').on("animationend oAnimationEnd webkitAnimationEnd", function(event) {
				//Make sure it's only on the in animation
				if (!$(event.currentTarget).hasClass('nt-element-in')) return;
				$(this).off("animationend oAnimationEnd webkitAnimationEnd");
				//Disable scrolling underneath - Doing at the end of the animation seems to reduce/remove the flicker mentioned above
				$('.nt-current .nt-content').not('.nt-element .nt-content').css('overflow-y', 'hidden');
			});

		}

	}