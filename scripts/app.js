( function () {
'use strict'

angular.module("lunchCheck", [])
.controller ("lunchCheckController", lunchCheckController);

lunchCheckController.$inject = ['$scope'];

function lunchCheckController ($scope) {
    $scope.checkLunch = function() {
        if ($scope.dishes == undefined)
            $scope.message = "Please enter data first";
        else {
            var food = $scope.dishes;
            var list = food.split(",");
            var numDishes = list.length;
            for (var i=0; i < list.length; i++)
            {
                if (list[i] == undefined || list[i].trim() =="")
                    numDishes--;
            }
            if (numDishes == 0)
                $scope.message = "Please enter data first";
            else if (numDishes > 3) 
                $scope.message = "Too much!";
            else 
                $scope.message = "Enjoy!"; 
        }
    };
}
}) ()