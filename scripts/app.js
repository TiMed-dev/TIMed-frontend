'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
  'ui.router',
  'ngAnimate'
  ])
 .config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('/dashboard', '/dashboard/inicio');
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('base', {
    abstract: true,
    url: '',
    templateUrl: 'views/base.html'
  })
  .state('login', {
    url: '/login',
    parent: 'base',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .state('dashboard', {
    url: '/dashboard',
    parent: 'base',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .state('inicio', {
    url: '/inicio',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/inicio.html'
  })
  .state('informacion', {
    url: '/informacion',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/informacion.html'
  })
  .state('resultados', {
    url: '/resultados',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/resultados.html'
  })
  .state('files', {
    url: '/files',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/files.html'
  })
  .state('informacion1', {
    url: '/informacion/1',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/informacion1.html'
  })
  .state('informacion2', {
    url: '/informacion/2',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/informacion2.html'
  })
  .state('informacion3', {
    url: '/informacion/3',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/informacion3.html'
  })
  .state('resultados1', {
    url: '/resultados/1',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/resultados1.html'
  })
  .state('resultados2', {
    url: '/resultados/2',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/resultados2.html'
  })
  .state('resultados3', {
    url: '/resultados/3',
    parent: 'dashboard',
    templateUrl: 'views/dashboard/resultados3.html'
  });

});
