Package.describe({
  name: 'jamielob:native-transitions-stylus',
  version: '0.5.0',
  // Brief, one-line summary of the package.
  summary: 'Stylus styles to make your app look native on iOS and Android',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use('stylus');
  api.imply('stylus');
  api.addFiles('variables.import.styl', 'client', {isImport: true});
  api.addFiles('mixins.import.styl', 'client', {isImport: true});
  api.addFiles('reset.import.styl', 'client', {isImport: true});
  api.addFiles('core.import.styl', 'client', {isImport: true});
  api.addFiles('forms.import.styl', 'client', {isImport: true});
  api.addFiles('images.import.styl', 'client', {isImport: true});
});
