 require.config({
   baseUrl: ".",
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
     "requirelib": "app/lib/js/require",
     "jquery": "app/lib/js/jquery-2.0.3.min",
     "backbone": "app/lib/js/backbone-min",
     "underscore": "app/lib/js/underscore-min",
     "text": "app/lib/js/text",
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
