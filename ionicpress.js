var ionicpress = angular.module('ionicpress', [])

.controller('IonicPressCtrl', function( $scope, $timeout, runtimeStates ) {
  	
  	// adds a route dynamically for our detail view
	runtimeStates.addState('app.detail', {
	  url: '/ionicpress/:postID',
	  views: {
	    'menuContent': {
	      templateUrl: 'lib/ionicpress/templates/detail.html'
	    }
	  }
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