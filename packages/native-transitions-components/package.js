Package.describe({
  name: 'jamielob:native-transitions-components',
  version: '1.0.0',
  // Components for the native transitions framework, including back button, slider zoom, slid down and slide up menus, modals
  summary: 'Great components to use with the native-transitions package.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use(['templating', 'jquery'], 'client');
  api.use('jamielob:native-transitions', 'client');
  api.use('gwendall:body-events@0.1.6', 'client');
  api.use('velocityjs:velocityjs@1.2.1', 'client');

  api.addFiles('ntBackButton.html', 'client');
  api.addFiles('ntBackButton.js', 'client');

  api.addFiles('ntSliderZoom.js', 'client');

  api.addFiles('ntElement.html', 'client');
  api.addFiles('ntElement.js', 'client');
  api.addFiles('ntModal.css', 'client');
  api.addFiles('ntSlide.css', 'client');


});
