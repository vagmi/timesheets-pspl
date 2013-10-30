define([ "jquery","underscore","text!templates/greeting.ejs"],
       function($,_, greeting){
  var fn1 = function() {
    $("body").append(_.template(greeting)({name: "PSPL"}));
  };

  var fn2 = function() {
    console.log("this is from fn2");
  }
  return {fn1: fn1, fn2: fn2};
})
