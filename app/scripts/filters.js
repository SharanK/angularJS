'use strict'

angular.module('parkingApp').filter('hyphenCasing', function(){
       return function(str){
       	var result='';
        result=str.slice(0,3) + '-' + str.slice(3,7);
        return result;
       };
});