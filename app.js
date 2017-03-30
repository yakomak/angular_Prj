// angular.module
// .controller
// .filter
// .directive

// Define the `phonecatApp` module
var app = angular.module('App', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('PLController', function PLController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});
