angular.module('SimpleSignupForm', [])
.directive('optIn', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'signup-template.html'
	}
});