(function() {
  'use strict';
  /* global ApplicationConfiguration */

  angular
    .module(ApplicationConfiguration.applicationModuleName)
    .service('testService', testService);

  /** @ngInject */
  function testService (){
    var thisIsPrivate = "Private service info";
    this.variable = "This is public";
    this.getPrivate = function () {
      return thisIsPrivate;
    };
  }

})();
