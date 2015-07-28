'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('HciApp', [
  'ngRoute',
  'HciApp.filters',
  'HciApp.services',
  'HciApp.directives',
  'HciApp.controllers'
]);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'MainController'}); 
  $routeProvider.when('/part-a', {templateUrl: 'partials/part-a.html', controller: 'MainController'});  
  $routeProvider.when('/part-b', {templateUrl: 'partials/part-b.html', controller: 'MainController'});

  $routeProvider.when('/part-b/conceptual-design', {templateUrl: 'partials/conceptual-design.html', controller: 'MainController'});
  $routeProvider.when('/part-b/website-plan', {templateUrl: 'partials/website-plan.html', controller: 'MainController'});
  $routeProvider.when('/part-b/link-structure', {templateUrl: 'partials/link-structure.html', controller: 'MainController'});

  $routeProvider.when('/part-b/index-concept', {templateUrl: 'partials/index-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/register-concept', {templateUrl: 'partials/register-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/sign-in-concept', {templateUrl: 'partials/sign-in-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/dashboard-concept', {templateUrl: 'partials/dashboard-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/account-concept', {templateUrl: 'partials/account-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/add-storage-concept', {templateUrl: 'partials/add-storage-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/retrieve-storage-concept', {templateUrl: 'partials/retrieve-storage-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/schedule-delivery-concept', {templateUrl: 'partials/schedule-delivery-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/billing-concept', {templateUrl: 'partials/billing-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/confirmation-concept', {templateUrl: 'partials/confirmation-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/in-transit-concept', {templateUrl: 'partials/in-transit-concept.html', controller: 'MainController'});

  $routeProvider.when('/part-c', {templateUrl: 'partials/part-c.html', controller: 'MainController'});  
  $routeProvider.when('/part-c/testing', {templateUrl: 'partials/testing.html', controller: 'MainController'});  

  $routeProvider.otherwise({redirectTo: '/'});

}]);

//app.constant('FIREBASE_URL', 'https://airlift-dev.firebaseio.com');