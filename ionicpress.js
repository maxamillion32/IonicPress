/*!
 * Copyright 2015 TapTapPress.
 * http://taptappress.com/
 *
 * IonicPress, v1.0
 * A WordPress add on for Ionic framework.
 * http://ionicframework.com/
 *
 * By @modemlooper
 *
 * Licensed under the MIT license.
 *
 */

var ionicpress = angular.module('ionicpress', [])

.controller('IonicPressCtrl', function( $scope, $timeout, runtimeStates, $state, $ionicHistory, $rootScope, $ionicHistory ) {

	var view = Object.keys($state.current.views)[0];
	var split = $state.current.name.split('.');
	$scope.statePrefix = split[0];

	var data = {
		url: '/ionicpress/:postID',
		views: {}
	}
	data['views'][view] = { templateUrl: 'lib/ionicpress/templates/detail.html' };

  	// add a route dynamically for our detail view
  	runtimeStates.addState( $state.current.name + '-detail', data );

  	console.log( $state.get() );
});


// adds extra routes to the app at runtime
ionicpress.provider('runtimeStates', function runtimeStates( $stateProvider, $urlRouterProvider  ) {

  this.$get = function($q, $timeout, $state) {
    return {
      getStates: function() {
        return $stateProvider;
      },
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
loadjscssfile("lib/ionicpress/js/controller.js", "js");
loadjscssfile("lib/ionicpress/js/directive.js", "js");
loadjscssfile("lib/ionicpress/js/factory.js", "js");
loadjscssfile("lib/ionicpress/js/filter.js", "js");
