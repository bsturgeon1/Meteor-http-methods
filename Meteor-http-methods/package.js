Package.describe({
  git: 'https://github.com/bsturgeon1/Meteor-http-methods',
  name: 'bsturgeon1:http-methods',
  version: '0.0.39',
  summary: 'Adds HTTP.methods RESTful'
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');

  api.use(['webapp@2.0.3', 'underscore', 'ejson'], 'server');

  api.use('http@3.0.0', { weak: true });

  api.export && api.export('HTTP');

  api.export && api.export('_methodHTTP', { testOnly: true });

  api.addFiles('http.methods.client.api.js', 'client');
  api.addFiles('http.methods.server.api.js', 'server');

});
