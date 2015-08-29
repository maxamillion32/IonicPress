ionicpress.controller('MasterCtrl', function( $scope, $rootScope, $sce, $http, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate, $templateCache, $stateParams, $timeout, DataStorage, $compile, $rootScope, $ionicHistory ) {
	
	$scope.$on('post-data-fetch', function(event, params) {
		DataStorage.getPosts( params.api, params.params ).then(function(data) {
			console.log(data);
			$scope.loading = true;
			$rootScope.posts = data.data;
			$rootScope.detail = $scope.detail;
		});
	});
	
});


ionicpress.controller('DetailCtrl', function( $sce, $scope, $rootScope, $stateParams ) {

	$scope.$on('$ionicView.beforeEnter', function( scopes, states ) {
				
		var postID =  $stateParams.postID;
		
		$scope.detailtemplate = 'lib/ionicpress/templates/components/'+ $rootScope.detail +'.html';
		
		angular.forEach( $rootScope.posts, function(value, key) {
			
			if( postID == $rootScope.posts[key]['id'] ) {	
				$scope.title = $rootScope.posts[key]['title']['rendered'];
				$scope.content = $rootScope.posts[key]['content']['rendered'];
			}
		});
		
	});
	
});