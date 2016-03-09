# Native Transitions Demo

This is a demo repo for the `native transitions for mobile` packages that I'm building for Meteor 1.3.  Everything in here is liable to change without notice so use at your own risk.

The native transitions package is usable on it's own without any of the other packages and is as simple to use as calling the function inside onRendered:
```
	Template.templateName.onRendered(function() {
 		nt.transition();
	});
```

The repo contains several packages:

##native-transitions
This is the core transitions package.  It implements the [Telerik Cordova plugin](http://plugins.telerik.com/cordova/plugin/native-page-transitions) with a Meteor friendly interface.
> When invoked, the plugin immediately grabs a screenshot of your webview, then waits a little for the new content to load, and then performs the transition by animating out the screenshot and in the view. 

The package and readme can be found [here](packages/native-transitions)

##native-transitions-stylus
This package is a set of styles to enable quick app layouts as seen [here](https://twitter.com/JamieLoberman/status/697152622805938177). Package is [here](packages/native-transitions-stylus)

##native-transitions-tabs
This is a package to allow tab functionality in your app.   It keeps the place of long lists by keeping the tabs "alive" in the background. 
Package is [here](packages/native-transitions-tabs)

##native-transitions-header
This is a package to allow static header functionality in your app.   It keeps the header in place when transitioning between two views that have headers.
Package is [here](packages/native-transitions-header)

##native-transitions-components
This package currently just contains a back button helper, but will also contain other componenents that work well with the native transitions, such as modals and slide down menus.
Package is [here](packages/native-transitions-components)

##native-spinner
This is a native spinner for iOS and Android.  It provide a Meteor interface for [cordova-plugin-spinner](https://www.npmjs.com/package/cordova-plugin-spinner)
Package is [here](packages/native-spinner).
