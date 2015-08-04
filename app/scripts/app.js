'use strict';

/**
 * @ngdoc overview
 * @name myportalApp
 * @description
 * # myportalApp
 *
 * Main module of the application.
 */
var app=angular.module('myportalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    "ui.router",
    "angular-jwt"
  ]);

app.config(function($stateProvider,$urlRouterProvider,$httpProvider) {

  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $urlRouterProvider.otherwise("/fossil");
  //checking in the url if the url has access_token
  $urlRouterProvider.rule(function ($injector, $location) {
    var absUrl = $location.absUrl();
    if (absUrl.indexOf("access_token") != -1) {
      var tokenData=absUrl.substring(absUrl.indexOf("=") + 1, absUrl.indexOf("&"));
      localStorage.token=tokenData;
      $location.path("fossil/home");
    }
  });
  $stateProvider
    .state("fossil", {
        url: "/fossil",
        templateUrl: "views/home.html",
    })
    .state("home", {
          url: "/fossil/home",
          templateUrl: "views/fossil.html",
          controller:"brandController",
          authenticate: true
    })
    .state("uam",{
        url:"/fossil/useraccessmanagement",
        templateUrl:"views/userAccessManagement.html",
        controller:"uamController",
        authenticate: true
    })
    .state("setup",{
        url:"/fossil/setup",
        templateUrl:"views/setupConfiguration.html",
        authenticate: true
    })
    .state("updateUAM",{
        url:"/fossil/useraccessmanagement/:userName",
        templateUrl:"views/editUam.html",
        controller:"updateUserScope",
        authenticate: true
    })
    .state("terms",{
      url:"/fossil/termsofuse",
      templateUrl:"views/terms.html",
      controller:"updateUserScope"
    })
    .state("um",{
      url:"/fossil/userManagement",
      templateUrl:"views/userManagement.html",
      controller:"uamController",
      authenticate: true
    })
    .state("viewProfile",{
      url:"/fossil/userManagement/profile",
      templateUrl:"views/viewProfile.html",
      authenticate: true,
      controller:function($scope){
        $scope.umClassActive="menuLinkActive"
      }
    })
    .state("deviceInfo",{
      url:"/fossil/userManagement/profile/deviceInfo",
      templateUrl:"views/deviceInfo.html",
      authenticate: true,
      controller:function($scope){
        $scope.umClassActive="menuLinkActive"
      }
    })
    .state("contactus",{
      url:"/fossil/contactus",
      templateUrl:"views/contactus.html"
    })
});
app.run(function ($rootScope, $state, userInfoService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      var authorised;

      /*if (toState.authenticate && authorised){
        // User isn’t authenticated
        $state.transitionTo("home");
        event.preventDefault();
      }*/
    });
  });
