 require.config({
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
   }
 });
 define(["require","app/module2","app/module1"],function(req,m2,m1){
   console.log("This is coming from the main module");
   m1.fn1();
   m1.fn2();
 });
