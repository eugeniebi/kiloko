// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.monprofil', {
      url: '/monprofil',
      views: {
        'menuContent': {
          templateUrl: 'templates/monprofil.html',
          controller: 'MonprofilCtrl'
        }
      }
    })
    .state('app.mesmatchs', {
      url: '/mesmatchs',
      views: {
        'menuContent': {
          templateUrl: 'templates/mesmatchs.html',
          controller: 'MesmatchsCtrl'
        }
      }
    })
    .state('app.questionnaire', {
      url: '/questionnaire',
      views: {
        'menuContent': {
          templateUrl: 'templates/questionnaire.html',
          controller: 'QuestionnaireCtrl'
        }
      }
    })
    .state('app.faq', {
      url: '/faq',
      views: {
        'menuContent': {
          templateUrl: 'templates/faq.html',
          controller: 'FaqCtrl'
        }
      }
    })
    .state('app.langues', {
      url: '/langues',
      views: {
        'menuContent': {
          templateUrl: 'templates/langues.html',
          controller: 'LanguesCtrl'
        }
      }
    })
    .state('app.choix', {
      url: '/choix',
      views: {
        'menuContent': {
          templateUrl: 'templates/choix.html',
          controller: 'ChoixCtrl'
        }
      }
    })
    .state('app.jpcoloc', {
      url: '/jpcoloc',
      views: {
        'menuContent': {
          templateUrl: 'templates/jpcoloc.html',
          controller: 'JpcolocCtrl'
        }
      }
    })
    .state('app.conditions', {
      url: '/conditions',
      views: {
        'menuContent': {
          templateUrl: 'templates/conditions.html',
          controller: 'ConditionsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});