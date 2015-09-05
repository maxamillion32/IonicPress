var ionicpress = angular.module('ionicpress', [])

.controller('IonicPressCtrl', function( $scope, $timeout, runtimeStates, $state, $ionicHistory ) {

	var view = Object.keys($state.current.views)[0];
	var split = $state.current.name.split('.');
	$scope.statePrefix = split[0];

	var data = {
		url: '/ionicpress/:postID',
		views: {}
	}
	data['views'][view] = { templateUrl: 'lib/ionicpress/templates/detail.html' };

  	// add a route dynamically for our detail view
	runtimeStates.addState( split[0] + '.detail', data );

});


// adds extra routes to the app at runtime
ionicpress.provider('runtimeStates', function runtimeStates($stateProvider ) {

  this.$get = function($q, $timeout, $state) {
    return {
      addState: function(name, state) {
        $stateProvider.state(name, state);
      }
    }
  }
});


// load stylesheets and js
function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
loadjscssfile("lib/ionicpress/css/ionicpress.css", "css");