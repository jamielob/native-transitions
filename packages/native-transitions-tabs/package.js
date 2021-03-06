Package.describe({
  name: 'jamielob:native-transitions-tabs',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Tabbed core pages that remember scroll + content',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use(['templating','jquery','tracker','session'], 'client');
  api.use('kadira:flow-router', 'client');
  api.use('jamielob:native-transitions', 'client');
  api.addFiles('native-transitions-tabs.html', 'client');
  api.addFiles('native-transitions-tabs.js', 'client');
  api.addFiles('native-transitions-tabs.css', 'client');
});
