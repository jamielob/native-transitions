#Scroll History

Remembers the scroll position on pages as you leave them

- Requires FlowRouter
- Works great with the Native Transitions packages

Each time you leave a page it remembers the scroll position.  When you re-enter that page it scrolls to it.

##Setup

`meteor add jamielob:scroll-position`

Simply call the scrollHistory function in your onRendered or equivalent template.

```
	scrollHistory(jQueryObject);
```

The `jQueryObject` refers to the object you want to scroll.  For example, if you are using this with the `native-transitions-stylus` package you would:

```
Template.templateName.onRendered(function() {

	var self = this;

	//Remember scroll position
	scrollHistory(self.$('.nt-content'));

```

##Options

Optional flag to keep scroll position in both forward and back directions.  Default is only when travelling back.

```
scrollHistory(self.$('.nt-content'), true); //Remembers scroll position in both directions
```

This plugin detects hardware back buttons, the `ntBackButton` helper from the `native-transitions-components` package and any buttons with a class of `nt-backButton`.