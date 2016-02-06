Package.describe({
  name: 'jamielob:native-scroll',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Scrolling that keeps its place',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-cordova-beta.2');
  api.use('ecmascript');
  api.use('stylus');
  api.use(['templating', 'session', 'jquery'], ['client']);
  api.addFiles(['native-scroll.js', 'native-scroll.styl'], 'client');

  api.export("ns");

});
