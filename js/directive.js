ionicpress.directive('ionicpress', function( $state, $stateParams, $rootScope, $timeout, DataStorage ) {

	return {
		restrict: 'E',
		link: function ( $scope, $element, $attrs ) {
		

			
			$attrs.$observe('template',function( templateName ){
			   $scope.template = 'lib/ionicpress/templates/components/'+ templateName +'.html';
			});
			
			$attrs.$observe('id',function( id ){
									
			    
			});
			
			$attrs.$observe('api',function( api ){
			   
			   var apiParams = {};
			   var apiUrl = api + '/wp-json/' + $attrs.endpoint + '?_jsonp=JSON_CALLBACK';
			   
			   	var params = {
				   	api: apiUrl,
				   	params: apiParams
			   	}
				
				$rootScope.$broadcast('post-data-fetch', params );
							   
			});
			
		
		},
		templateUrl: 'lib/ionicpress/templates/ionicpress.html'
		//template: '<div ng-include="template"></div>'
	};
});

