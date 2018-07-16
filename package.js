Package.describe({
  name: 'abellsmythe:tables',
  version: '0.1.0',
  summary: 'Beautiful Table responsive styles',
  git: 'https://github.com/abellsmythe/tables',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.8');
  api.use('ecmascript');
  api.addFiles('src/tables.css');
});
