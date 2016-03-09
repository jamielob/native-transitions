#Native Transitions Components
Components for use with the `native-transitions` and `native-transitions-stylus` packages.

##ntBackButton
A back button component that uses the Ionicons package

```
	meteor add pagebakers:ionicons
```

You can easily roll your own back button template an use whatever icon or text you like.  For example:

```
	<a class="nt-button" onclick="history.go(-1);" nt-direction="right">
			<!-- Any icon or text can go here! -->
	</a>
```

If you want to use text, don't forget the `.nt-text` class.  You can find out more in the readme for the `native-transitions-stylus` package readme.



##ntElements

Put the elements as the last thing inside the `nt-container` div so that is kept outside of the scrolling area.

`{{>ntElement name="demoMenu" type="slideDown"}}`

Then just put your element content in a template with the same name:

```
	<template name="demoMenu">
		Element content goes here!
   </template>
```

If you have headers or tabs, wrap your element content in a div with the relevant class.  For example, if you have a slideDown and a header, you can add the `nt-header-padding` class to a wrapper div.  If you have a slideUp and tabs, you can add the `nt-tabs-padding` class to a wrapper div.

```
	<template name="demoMenu">

		<div class="nt-header-padding">
				
				<a class="nt-item nt-icon-right" href="/logout" nt-target="demoMenu">
			        Logout
			        <i class="ion-log-out"></i> 
			    </a>

		</div>
		
	</template>
```

