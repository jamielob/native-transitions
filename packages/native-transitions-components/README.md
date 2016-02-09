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

