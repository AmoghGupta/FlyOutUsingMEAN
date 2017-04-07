// angular code for generating and rendering the flyout template
var flyOut = angular.module("FlyOutApp", []);
flyOut.controller("FlyOutController", ["$scope", "$http", "$location", function ($scope, $http, $location) {
    //this is an array check condition provided by angular
    $scope.isArray = angular.isArray;
    // generating the service URL for getting the flyout data
    var flyoutUrl = $location.absUrl() + "api/jsondata";
    // Using angular $http service for fetching data
    $http.get(flyoutUrl).then(function (response) {
        var flyOutData = response.data;
        $scope.flyOutHeader = flyOutData.header;
        $scope.flyoutSections = flyOutData.sections;
        setTimeout(
  function()
  {
    toggletableinFlyoutHeader();
  }, 2000);
    }, function (response) {
        $scope.myWelcome = response.statusText;
    });
    function toggletableinFlyoutHeader() {
        $(document).ready(function () {
            $(".expandImgflyOutTable").click(function () {
                $(".renderflyOutHeaderTable").toggle();
            })
        });
    }
}]);
// this is required as we are loading multiple ng-app
angular.bootstrap(document.getElementById("flyout"), ['FlyOutApp']);
// handling the Flyout scenarios
$(document).ready(function () {
    //Show/hide flyout functionality
    $("#__OCP_Flyout_arrow").click(function () {
        $(".FlyOutSuperParent").slideToggle("slow");
    });
});
