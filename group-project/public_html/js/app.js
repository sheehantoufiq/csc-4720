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
  $routeProvider.when('/part-b/about-concept', {templateUrl: 'partials/about-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/services-concept', {templateUrl: 'partials/services-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/financing-concept', {templateUrl: 'partials/financing-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/test-drive-concept', {templateUrl: 'partials/test-drive-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/gallery-concept', {templateUrl: 'partials/gallery-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/availability-concept', {templateUrl: 'partials/availability-concept.html', controller: 'MainController'});
  $routeProvider.when('/part-b/contact-concept', {templateUrl: 'partials/contact-concept.html', controller: 'MainController'});

  $routeProvider.otherwise({redirectTo: '/'});

}]);

//app.constant('FIREBASE_URL', 'https://airlift-dev.firebaseio.com');