/**
 * Created by vladyslav on 2/6/17.
 */
(function() {
  'use strict';

  angular
    .module('SubModuleName1')
    .controller('SubModuleNameController', SubModuleNameController);

  /** @ngInject */
  function SubModuleNameController() {
    //here controller code
  }
})();
