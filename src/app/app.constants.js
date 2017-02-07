/* global moment:false */
(function() {
  'use strict';

/* global ApplicationConfiguration */

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .constant('moment', moment);

})();
