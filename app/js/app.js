'use strict';

/* App Module */

angular.module('phonecat', ['phonecatFilters']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/phones', {templateUrl: 'partials/phone-list.html',   controller: PhoneListCtrl}).
      when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/phones'});
}]);

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngSanitize']);