Package.describe({
  name: 'jamielob:native-spinner',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Native spinner',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Cordova.depends({
    'cordova-plugin-spinner': '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use(['templating', 'session', 'jquery'], ['client']);
  api.addFiles('native-spinner.js', 'client');

  api.export("nativeSpinner");
  
});

