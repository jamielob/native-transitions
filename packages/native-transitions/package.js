Package.describe({
  name: 'jamielob:native-transitions',
  version: '1.2.0',
  // Brief, one-line summary of the package.
  summary: 'Actual native transitions for your Meteor app on iOS and Android',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
    // 'com.telerik.plugins.nativepagetransitions': '0.6.0'
    //Fixes topOffsetPixel adding margin https://github.com/Telerik-Verified-Plugins/NativePageTransitions/tarball/7409e2f9a28a069095862d7b1d14d03207acffb9
    //Fixes console log warning 
    //'com.telerik.plugins.nativepagetransitions': 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions/tarball/e0b9839315353db9329cbf7fe25fb5f548c1dd7f' 
    //0.6.1
    //'com.telerik.plugins.nativepagetransitions': 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions/tarball/2d7cbc23bb10312e676f3ef51ca42b8fbe4d4105'
    //0.6.2
    //'com.telerik.plugins.nativepagetransitions': 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions/tarball/860e2f60df294195a1bdb07103f7d954f2bd9af2'
    //0.6.3
    'com.telerik.plugins.nativepagetransitions': 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions/tarball/611528b80cb5e50c836da74bdcf5e26793fcc0d6'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use(['templating', 'jquery'], ['client']);
  api.addFiles('native-transitions.js', 'client');

  //Exposes options and defaults so user can override
  api.export("nt");

});
