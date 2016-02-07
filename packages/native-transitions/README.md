

##Status bar
You'll need to style your status bar to make things look nice.
```meteor add mobile-status-bar```

```
Meteor.startup(function() {
	if (Meteor.isCordova) {
		//Format the status bar
		StatusBar.overlaysWebView(false);
		StatusBar.styleLightContent();
		StatusBar.backgroundColorByHexString("#2f3339");
	}
});
```

##Completed callback

You can pass a callback function in to nt.transition() and it will be called once the transition is completed.


##Speed
Don't put too much on a single page otherwise the transition will have a delay.  Check out the native-transitions-tabs package for your core app pages.


##Router
Although this package doesn't depend on FlowRouter, it's the best one to use with it.
The native-transitions-tabs package does depend on FlowRouter, making use of the reactive query params.