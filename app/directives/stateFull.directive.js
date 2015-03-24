app.directive('ngStateFull', function(){
	'use strict';

	return {
		restict: 'A',
		link: function link (scope, element, attrs){
			element.bind('click', function(){
				scope.$apply(function(){
					if (!element.hasClass(attrs.ngStateFull)) {
						element.addClass(attrs.ngStateFull);
					}else{
						element.removeClass(attrs.ngStateFull);
					};
				});
			})
		}
	};
});