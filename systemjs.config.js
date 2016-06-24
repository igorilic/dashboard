/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'moment':                     'node_modules/moment/moment.js',
    'jquery':                     'node_modules/jquery/dist/jquery.min.js',
    'ms-signalr-client':          'node_modules/ms-signalr-client/jquery.signalr-2.2.0.min.js',
    // 'redux':                      'node_modules/redux/dist/redux.min.js',
    // 'redux-logger':               'node_modules/redux-logger/dist/index.min.js',
    // 'redux-localstorage':         'node_modules/redux-localstorage/lib/persistState.js',
    // 'ng2-redux':                  'node_modules/ng2-redux/lib'
    '@ngrx':                      'node_modules/@ngrx'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js', defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    // dodata pakovanja @ngrx
    '@ngrx/core':                 { main: 'index.js', format: 'cjs'},
    '@ngrx/store':                { main: 'index.js', format: 'cjs'}
    
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  };

  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);
