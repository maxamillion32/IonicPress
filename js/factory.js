ionicpress.factory( 'DataStorage', function( $http, $stateParams, $rootScope ){

	return {
		getPosts: function( api, params ) {
			return $http.jsonp( api, { params: params } );
		}
	}
	
});