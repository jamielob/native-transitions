if (Meteor.isCordova) {


}

ns = {};
ns.templates = {};

ns.remember = function() {

	//When we first come to the page we need to check if we need to scroll

	//Get the current template name
	var currentTemplate = Template.instance().view.name.replace('Template.', '');

	//Check for a current scroll position
	var savedPos = ns.templates[currentTemplate];
	if (savedPos) {
		$('.fui-scroll').scrollTop(savedPos);
	}

	//Record any scroll change
	function scrollPos() {
		ns.templates[currentTemplate] = $('.fui-scroll').scrollTop();
	}
	$('.fui-scroll').scroll(scrollPos);

}
