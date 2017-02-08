/**
 * Created by vladyslav on 2/8/17.
 */
(function(){
  'use strict';

  angular
    .module('ModuleName1')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('demoTest', {
        url: '/demo',
        templateUrl: 'app/modules/ModuleName1/views/Demo.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  }

})();
