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
    .state('app.jpcoloc2', {
      url: '/jpcoloc2',
      views: {
        'menuContent': {
          templateUrl: 'templates/jpcoloc2.html',
          controller: 'Jpcoloc2Ctrl'
        }
      }
    })
    .state('app.jpcoloc3', {
      url: '/jpcoloc3',
      views: {
        'menuContent': {
          templateUrl: 'templates/jpcoloc3.html',
          controller: 'Jpcoloc3Ctrl'
        }
      }
    })
    .state('app.jpcoloc4', {
      url: '/jpcoloc4',
      views: {
        'menuContent': {
          templateUrl: 'templates/jpcoloc4.html',
          controller: 'Jpcoloc4Ctrl'
        }
      }
    })
    .state('app.jpcoloc5', {
      url: '/jpcoloc5',
      views: {
        'menuContent': {
          templateUrl: 'templates/jpcoloc5.html',
          controller: 'Jpcoloc5Ctrl'
        }
      }
    }) 
    .state('app.jpcolocfinal', {
      url: '/jpcolocfinal',
      views: {
        'menuContent': {
          templateUrl: 'templates/jpcolocfinal.html',
          controller: 'JpcolocfinalCtrl'
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