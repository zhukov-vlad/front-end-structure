(function() {
  'use strict';

  angular
    .module('ModuleName1')
    .directive('someDirective', SomeDirective);

  /** @ngInject */
  function SomeDirective (){
    return {
      template: 'Some module directive example'
    };
  }

})();
