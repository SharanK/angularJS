'use strict';

angular.module('parkingApp')
	.controller('parkingCtrl',function($scope){
		console.log('Called within controller : parkingCtrl');

		$scope.cars = [
     				{plate : '790jhjh'},
					{plate : '84jkjkk'},
					{plate : '037hjhj'},
					{plate : '7E24H11'}
      
     ];

   		$scope.save = function(car){
			$scope.cars.push(angular.copy(car));
			delete $scope.car;
		};

       $scope.delete = function(car){
		//var index = $scope.cars.indexOf();
 		 $scope.cars.splice(-1, 1);     
}


});