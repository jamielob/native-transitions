Package.describe({
  name: 'jamielob:native-transitions',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Actual native transitions for your Meteor app.  The fastest transitions possible on iOS and Android',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
    // 'com.telerik.plugins.nativepagetransitions': '0.6.0'
    'com.telerik.plugins.nativepagetransitions': 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions/tarball/7409e2f9a28a069095862d7b1d14d03207acffb9' //Fixes topOffsetPixel adding margin https://github.com/Telerik-Verified-Plugins/NativePageTransitions/tarball/7409e2f9a28a069095862d7b1d14d03207acffb9
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-cordova-beta.2');
  api.use('ecmascript');
  api.use(['templating', 'session', 'jquery'], ['client']);
  api.addFiles('native-transitions.js', 'client');

  api.export("nt");

});
