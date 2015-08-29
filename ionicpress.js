var ionicpress = angular.module('ionicpress', [])

.controller('IonicPressCtrl', function( $scope, $timeout, runtimeStates ) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  	
	runtimeStates.addState('app.detail', {
	  url: '/ionicpress/:postID',
	  views: {
	    'menuContent': {
	      templateUrl: 'lib/ionicpress/templates/detail.html'
	    }
	  }
	});
		
});
 

ionicpress.controller('DetailCtrl', function( $sce, $scope, $rootScope, $stateParams ) {

	$scope.$on('$ionicView.beforeEnter', function( scopes, states ) {
				
		var postID =  $stateParams.postID;
	
	});



});

ionicpress.provider('runtimeStates', function runtimeStates($stateProvider) {
  this.$get = function($q, $timeout, $state) {
    return { 
      addState: function(name, state) { 
        $stateProvider.state(name, state);
      }
    }
  }
});