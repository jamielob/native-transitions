Template.items.onRendered(function() {
 
 	nt.transition();

	var self = this;
 
	var counter = 0;
	var array = [];
	Session.set('array', '');

	thisInterval = Meteor.setInterval(function() {
		if (counter > 300) Meteor.clearInterval(thisInterval);
	  	array.push(counter);
		Session.set('array', array);
	    counter++;
	}, 1);

});


Template.items.helpers({
	array: function () {
		return Session.get('array');
	}
});
