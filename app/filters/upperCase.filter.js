app.filter('upperCase', function(){
	'use strict';

	/*
	* input: "JOsimAr LoPerA"
	* output: "Josimar Lopera"
	*/

	return function(val){
		return val ? val.replace(/\w\S*/g, function(txt){
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
		}) : val;
	}
})