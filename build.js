({
   baseUrl: ".",
   shim: {
     "underscore": {
       deps: [],
       exports: '_'
     }
   },
   paths : {
     "require": "app/lib/js/require",
     "jquery": "app/lib/js/jquery-2.0.3.min",
     "underscore": "app/lib/js/underscore-min",
     "text": "app/lib/js/text",
     "templates": "app/templates"
   },
   name: 'app/main',
   out: 'build/main-built.js'
})
