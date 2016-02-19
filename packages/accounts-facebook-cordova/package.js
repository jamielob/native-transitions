Package.describe({
  summary: "Login service for Facebook (2.4) accounts (works with cordova)",
  version: "0.0.2",
  git: "https://github.com/btafel/accounts-facebook.git",
  author: "Jamie Loberman",
  name: "jamielob:accounts-facebook-cordova",
});

Package.on_use(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('facebook', ['client', 'server']);
  
  api.use('service-configuration', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'server');

  api.add_files('facebook_server.js', 'server');
  api.add_files("facebook.js");
});
