(function() {
  'use strict';
  /* global ApplicationConfiguration */

  angular
    .module(ApplicationConfiguration.applicationModuleName)
    .directive('sharedDirective', SharedDirective);

  /** @ngInject */
  function SharedDirective (){
    return {
      restrict: 'E',
      template: '<div>Some shared directive example</div>'
    };
  }

})();
