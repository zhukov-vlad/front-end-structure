(function() {
  'use strict';

  angular
    .module('ModuleName1')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, testService) {
    var vm = this;

    vm.classAnimation = '';
    vm.showToastr = showToastr;

    function showToastr() {
      toastr.info('Some info from shared service:' + testService.getPrivate());
      vm.classAnimation = '';
    }

  }
})();
