angular.module('myControllersContainer',[])

  /* MyController */
  .controller('MyController',function($scope) {
    // controller logic here
    console.log ("MyController logic...")

    // $scope is shared w/ the view (piece of HTML)
    // that uses this controller (ng-controller)
    $scope.firstName = 'Sean';
    $scope.lastName = 'Citizen';

  })

  /* MyOtherController */
  .controller('MyOtherController',function($scope) {
    // my other controller logic here
    console.log ("MyOtherController logic...")

    // every controller manages its own $scope

    $scope.firstName = 'JuanMa';
    $scope.lastName = 'Guitar';

  });
