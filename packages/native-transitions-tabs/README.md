#Native Transitions Tabs
Tabbed core pages that remember scroll position and content

```meteor add jamielob:native-transitions-tabs```

You can have up to 5 tabs.

##Dependencies

This is an extension for the `jamielob:native-transitions` package.

```meteor add jamielob:native-transitions```

The native-transitions-tabs package depends on FlowRouter, making use of the reactive query params to track when the tab has changed and update the view. 

```meteor add kadira:flow-router```

It also needs to render a placeholder template on a route (explained below). For this I reccomend using BlazeLayout

```meteor add kadira:blaze-layout```

You could roll your own styles in theory, but it is highly reccomened that you add the `jamielob:native-transitions-stylus` package to your project if you haven't already.

```meteor add jamielob:native-transitions-stylus```

If you want the tab icons that I've included in the examples below to work (optional), you'll need to add the `pagebakers:ionicons` package to your project.

```meteor add pagebakers:ionicons```


##Setup

You need to designate a single route in your app to handle all of the tabs.  This is so the native transitions can work, without losing our scroll position or destroying the content on the tabs.   Add the following to your router.

```
	FlowRouter.route('/', {
      name: 'tabs',
      action: function() {
        BlazeLayout.render('ntPlaceholder');
      }
    });
```

The route itself and name can be anything you like, but just make sure that it renders the `ntPlaceholder` template which is provided by this package.

In the <body> of your app use the `{{>ntTabs}}` template to set up the templates you want to use for the tabs and pages.

```
	{{>ntTabs tabs="tabs" tab1="tab1" tab2="tab2" tab3="tab3" tab4="tab4"}}
```

`tabs` refers to the name of the template containing the tab buttons themselves.

Each of the tab pages should be wrapped in a div with classes of `nt-tab-container` and the tab number formatted as `nt-tab-x`.

```
	<div class="nt-tab-container nt-tab-1">
		...
	</div>
```

To pick with container is displayed first add the `.nt-tab-container-current` class to it.

```<div class="nt-tab-container nt-tab-container-current nt-tab-1">
		...
	</div>
```

Next add the tabs themselves.  Tabs are simply anchor tags wrapped in a div with a class of `.nt-tabs-fixed`.  Each anchor tag should have a href that links to whichever route you have set up as the placeholder route plus a query param called `nt-tab` containing the tab number. 

```
	<div class="nt-tabs-fixed">
		
	    <a href="/?nt-tab=1">
			<i class="ion-ios-home"></i>
			Tab 1
		</a>
		<a href="/?nt-tab=2">
			<i class="ion-ios-more"></i>
			Tab 2
		</a>
		<a href="/?nt-tab=3">
			<i class="ion-ios-people"></i>
			Tab 3
		</a>
		<a href="/?nt-tab=4">
			<i class="ion-ios-person"></i>
			Tab 4
		</a>
	   
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

Tabs height is set to 50px by default to match the css in the native-transitions-stylus package
If you change the height of the tabs, you'll also need to change the fixedPixelsBottom setting to match.

In your lib directory or similar create a file called nt-settings.js and include the following in it

if (Meteor.isCordova) {
	nt.defaults.fixedPixelsBottom = 60;  //This number should equal the height of your tabs in px
}

##Slow content heavy pages

If you find that your tab page is slow (e.g. you have long lists) then you can the `.nt-heavy` class to the heavy content.  It is recommended to add this to a container around all of the heavy content, leaving the header/title. 

For example:

```
	<div class="nt-scroll nt-heavy">

		{{#each list}}
			<!-- Loads of content! -->
		{{/each}}

	</div>

``` 

What this does is hide the heavy content for a split second, makes the switch to the page, and then reveals it.  This means that the transition to the page is instant and it takes as long as needed to load the content.   If you would like to show a spinner or similar while the content is loading you can use the `{{ntHeavyLoaded}}` helper.

```
	{{#unless ntHeavyLoaded}}
		{{>ntLoading}}
	{{/unless}}
```

On Android and older iOS devices this will be required quicker, so be sure to test on real devices.  If in doubt, use the pattern above.

##Helpers and classes

The `nt-tabs-hidden` class is added the the tabs-conainer when they aren't showing.  This is used internally to disable scrolling in the underlying .nt-scroll when they aren't be shown to fix a z-index bug on mobile that allows the scrolling of a hidden div.

You can check if the tabs are hidden using the provided global helper:
```
	{{#if ntTabsHidden}}
		...
	{{/if}}
```

The `nt-tabs-x` class is added the the tabs-conainer to show which tab is currently showing. 

You can access this in your template if needed using the `{{ntCurrentTab}}` helper.

As mentioned above you can also check if any heavy content has been loaded using the `{{ntHeavyLoaded}}` helper.