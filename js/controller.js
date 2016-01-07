angular.module('myControllersContainer',[])
  .controller('MyController',function($scope) {
    // controller logic here
    console.log ("MyController logic...")
  })
  .controller('MyOtherController',function($scope) {
    // my other controller logic here
    console.log ("MyOtherController logic...")
  });
