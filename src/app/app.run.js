(function() {
  'use strict';
  /* global ApplicationConfiguration */

  angular
    .module(ApplicationConfiguration.applicationModuleName)
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end - debug demo');
  }

})();
