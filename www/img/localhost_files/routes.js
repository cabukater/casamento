angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.convite', {
    url: '/casamento',
    views: {
      'tab1': {
        templateUrl: 'templates/convite.html',
        controller: 'conviteCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.page', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/page.html',
        controller: 'pageCtrl'
      }
    }
  })

  .state('tabsController.confirmarPresenA', {
    url: '/confirm',
    views: {
      'tab4': {
        templateUrl: 'templates/confirmarPresenA.html',
        controller: 'confirmarPresenACtrl'
      }
    }
  })

  .state('tab3DefaultPage', {
    url: '/page10',
    templateUrl: 'templates/tab3DefaultPage.html',
    controller: 'tab3DefaultPageCtrl'
  })

  .state('gPS', {
    url: '/GPS',
    templateUrl: 'templates/gPS.html',
    controller: 'gPSCtrl'
  })

$urlRouterProvider.otherwise('/page1/casamento')


});