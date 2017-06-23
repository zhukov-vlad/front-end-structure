

/**
 * @ngdoc module
 * @name myApp.components.accordion
 */

/**
 * @ngdoc directive
 * @name accordion
 * @module myApp.components.accordion
 * @description
 * Accordion
 */

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
