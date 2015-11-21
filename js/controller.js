ionicpress.controller('MasterCtrl', function( $scope, $rootScope, $sce, $http, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate, $templateCache, $stateParams, $timeout, DataStorage, $compile, $rootScope, $ionicHistory ) {

	if( !$rootScope.posts ) {
		$scope.page = 1;
	}
	$scope.$on('post-data-fetch', function(event, params) {
		DataStorage.getPosts( params.api, params.params ).then(function(data) {
			$scope.loading = true;
			$rootScope.posts = data.data;
			$rootScope.detail = $scope.detail;
		});
	});

	$scope.loadMoreItems = function() {

		var apiParams = {'page':2};
		var apiUrl = $scope.api + '/wp-json/wp/v2/' + $scope.endpoint + '?_jsonp=JSON_CALLBACK';

		 var params = {
			 api: apiUrl,
			 params: apiParams
		 }

		DataStorage.getPosts( params.api, params.params ).then(function(data) {
			//var posts = angular.copy( $rootScope.posts );
			//$rootScope.posts = posts.push(data.data);
			$scope.$apply(function(){
			    $scope.$broadcast('scroll.infiniteScrollComplete');
			});
		});
	}

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
