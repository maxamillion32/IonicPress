ionicpress.controller('ComponentCtrl', function( $scope, $rootScope, $sce, $http, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate, $templateCache, $stateParams, $timeout, DataStorage, $compile, $rootScope, $ionicHistory ) {
	
	$scope.$on('post-data-fetch', function(event, params) {
		DataStorage.getPosts( params.api, params.params ).then(function(data) {
			console.log(data);
			$scope.loading = true;
			$rootScope.posts = data.data;
		});
	});
	
});