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

