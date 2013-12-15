'use strict';

/* Filters */

angular.module('phonecatFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});


$scope.filterPhonesByNameOrSnippet = function(phones,query) {
  var filteredPhones = [];
  var queryRegExp = RegExp(query, 'i'); //'i' -> case insensitive
  angular.forEach(phones, function(phone) {
    if (phone.name.match(queryRegExp) || phone.subject.match(queryRegExp)) {
      filteredPhones.push(phone);
    }
  });
  return filteredPhones;
};