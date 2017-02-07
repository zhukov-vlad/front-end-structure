/*eslint no-console: 0 */
/*eslint angular/log: 0 */

(function(global) {
  'use strict';

// Init the application configuration module for AngularJS application
  global.ApplicationConfiguration = (function ($window) {
// Init module configuration options
    var applicationModuleName = 'CarZarMain';
    var applicationModuleVendorDependencies = [
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr'
    ];

// Add a new vertical module
    var registerModule = function (moduleName, dependencies) {
// Create angular module
      var module = angular.module(moduleName, dependencies || []);

// Add the module to the AngularJS configuration file
      angular.module(applicationModuleName).requires.push(moduleName);
      return module;
    };

    var isDebug = true;

    if (!isDebug) {
      console.log = function () {};
      $window.console = console;
    }

    return {
      applicationModuleName: applicationModuleName,
      applicationModuleVendorDependencies: applicationModuleVendorDependencies,
      registerModule: registerModule,
      isDebug: isDebug
    };

  })();

})(this);
