'use strict';

/* Filters */

var app = angular.module('HciApp.filters', []);


app.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
}]);