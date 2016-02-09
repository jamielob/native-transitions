#Native Transitions Tabs
Tabbed core pages that remember scroll position and content

```meteor add jamielob:native-transitions-tabs```

The readme below is pretty comprehensive, but it's really simple to get this working.  I've provided a demo repo that you can use for setup reference too.

##Dependencies

This is an extension for the `jamielob:native-transitions` package.

```meteor add jamielob:native-transitions```

The native-transitions-tabs package depends on FlowRouter, making use of the reactive query params to track when the tab has changed and update the view. 

```meteor add kadira:flow-router```

It also needs to render a placeholder template on a route (explained below). For this I reccomend using BlazeLayout

```meteor add kadira:blaze-layout```

You could roll your own styles in theory, but it is reccomended that you add the `jamielob:native-transitions-stylus` package to your project if you haven't already.

```meteor add jamielob:native-transitions-stylus```

If you want the tab icons that I've included in the examples below to work (optional), you'll need to add the `pagebakers:ionicons` package to your project.

```meteor add pagebakers:ionicons```


##Setup

Designate a single route in your app to handle all of the tabs.  This is so the native transitions can work, without losing our scroll position or destroying the content on the tabs.   Add the following to your router.

```
	FlowRouter.route('/', {
      name: 'tabs',
      action: function() {
        if (!FlowRouter.getQueryParam('nt-tab')) FlowRouter.setQueryParams({'nt-tab': 1 });
        BlazeLayout.render('ntPlaceholder');
      }
    });
```

The route itself and name can be anything you like, but just make sure that it renders the `ntPlaceholder` template which is provided by this package.  To pick which tab container is displayed first change the tab number that is set by FlowRouter in the snippet above.

In the <body> of your app use the following to set up the templates you want to use for the tabs and pages, as well as the buttons along the bottom.  You can have up to 5 tabs.

```
	{{#ntTabs template1="tab1" template2="tab2" template3="tab3" template4="tab4"}}

		{{#ntTab position="1"}}
			<i class="ion-ios-home"></i>
			Tab 1
		{{/ntTab}}

		{{#ntTab position="2"}}
			<i class="ion-ios-email"></i>
			Tab 2
		{{/ntTab}}

		{{#ntTab position="3"}}
			<i class="ion-heart"></i>
			Tab 3
		{{/ntTab}}

		{{#ntTab position="4"}}
			<i class="ion-ios-person"></i>
			Tab 4
		{{/ntTab}}

	{{/ntTabs}}

```

Each of the tab pages should be wrapped in a div with classes of `nt-container` just like any other native-transitions page.

```
	<div class="nt-container">
		...
	</div>
```



##Pages without tabs

Tabs stay visible at the bottom of every page by default

If you have a page that you don't want the tabs to appear on then simply add `.nt-no-tabs` on the `.nt-container` div.

```
	<div class="nt-tab-container nt-no-tabs">
		...
	</div>
```

This does three things.  First it increases the z-index above the tabs essentially hiding them, second it reduces the pixelsOffsetBottom to zero when entering the page and third it makes sure any links on that page set the pixelOffsetBottom of the native transitions package back to 0 too.  Magic!


##Tab height

Tabs height is set to 50px by default to match the css in the `native-transitions-stylus` package
If you change the height of the tabs, you'll also need to change the `fixedPixelsBottom` setting to match.

In your lib directory or similar create a file called `nt-settings.js` or similar and include the following in it

```
if (Meteor.isCordova) {
	nt.defaults.fixedPixelsBottom = 60;  //This number should equal the height of your tabs in px
}
```


##Helpers and classes

The `.nt-tabs-undefined` class is added the the tabs-conainer when they aren't showing.  This is used internally to disable scrolling in the underlying `.nt-scroll` when they aren't being shown to fix a z-index bug on mobile that allows the scrolling of a hidden div.

The `nt-tabs-x` class is added the the tabs-conainer to show which tab is currently showing where `x` is the tab number. 

You can access this in your template if needed using the `{{ntCurrentTab}}` helper.