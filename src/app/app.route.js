(function() {
  'use strict';
  /* global ApplicationConfiguration */

  angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/ModuleName1/views/Main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
