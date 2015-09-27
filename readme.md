# IonicPress
Ionic Framework drop in to access WordPress WP-API data

First thing to do is create an ionic app locally. Read more about installing Ionic here: http://ionicframework.com/docs/cli/install.html

    $ npm install -g ionic
    $ npm install -g ionicpress
    $ ionic start myapp sidemenu
    $ cd myapp
    $ ionicpress install

After you have installed Ionic and IonicPress and created an app, the next step is to add the ionicpress.js to your apps index.html. Open index.html in the www folder and add the code below after your apps .js files.

     <script src="lib/ionicpress/ionicpress.js"></script>

After adding the ionicpress.js file you can add routes for WordPress pages in your app. Open menu.html and add a menu item to link to your route.

    <ion-item menu-close href="#/app/blog">
     blog
    </ion-item>

Ok, now that we got are menu item linking to a route not we need to add our route/state to the $stateProvider in www/js/app.js

    .state('app.blog', {
        url: '/blog',
        views: {
          'menuContent': {
            templateUrl: 'templates/blog.html',
            controller: 'IonicPressCtrl'
          }
        }
    })

Now create a template for your WordPress page. www/templates/blog.html and in the template we will add a directive for ionicpress.

    <ion-view view-title="Blog">
      <ion-content>
  	    <ionicpress api="http://bptrunk.dev" endpoint="posts" template="list" detail="default"></ionicpress>
      </ion-content>
    </ion-view>

