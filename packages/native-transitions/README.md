

#Status bar
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




#Speed
Don't put too much on a single page otherwise the transition will have a delay.


#Router
Although this package does depend on FlowRouter, it's the best one to use with it.
The native-transitions-tabs package does depend on FlowRouter, making use of the reactive query params