Package.describe({
  name: 'jamielob:scroll-history',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Remembers the scroll position when heading back to a page',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use('ecmascript');
  api.use(['templating', 'jquery'], ['client']);
  api.use(['kadira:flow-router@2.10.1'], 'client');
  api.use(['gwendall:body-events@0.1.6'], 'client');
  api.addFiles('scroll-history.js', 'client');

  //Exposes options and defaults so user can override
  api.export("scrollHistory");

});
