 require.config({
   shim: {
     "underscore": {
       deps: [],
       exports: '_'
     },
     "backbone": {
       deps: ['underscore','jquery'],
       exports: 'Backbone'
     }
   },
   paths : {
     "requirelib": "bower_components/requirejs/require",
     "jquery": "bower_components/jquery/jquery",
     "backbone": "bower_components/backbone/backbone-min",
     "underscore": "bower_components/underscore/underscore-min",
     "text": "bower_components/text/text",
     "templates": "app/templates"
   }
 });
 define(["requirelib","jquery",'app/collections/clients','app/router','app/views/navigation','backbone']
        ,function(rlib,$, Clients, Router, NavigationView, Backbone){
  $(function(){
    window.clients = new Clients([{name: "PSPL", location: "Pune"},
                                 {name: "Reduce Data", location: "San Francisco"},
                                 {name: "Thoughtworks", location: "Chennai"}]);

    var routerObject = new Router();
    navigation = new NavigationView({model: routerObject,
                                    el: $("ul.nav.navbar-nav.main-nav")});
    Backbone.history.start();
  });
 });
