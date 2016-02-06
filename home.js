if (Meteor.isClient) {

	Template.home.onCreated(function() {
		var self = this;

		self.list = new ReactiveVar();
		self.isReady = new ReactiveVar(false);

	});

	Template.home.onRendered(function() {
		var self = this;
		self.isReady.set(false);
		nt.transition();
		ns.remember();

		Meteor.setTimeout(function() {
			self.isReady.set(true);
		},0);
	
		// Meteor.call('tough', function (error, result) {
		// 	self.list.set(result);

		// });
		//window.scrollTo(0, 500);
	});



	Template.home.helpers({

		isReady: function () {
			return Template.instance().isReady.get();
		}

	});

	

}

