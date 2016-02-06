if (Meteor.isClient) {

	Template.registerHelper("list", function() {
		return _.range(20);
	});

}





// if (Meteor.isServer) {

// 	Meteor.methods({
// 		tough: function(attribute){
		
// 			Meteor._sleepForMs(2000); //to simulate longer response sleep for 2 seconds

// 			return _.range(500);


// 		}
// 	});
	

// }
