define(['backbone','jquery'],function(Backbone, $){

  var NavigationView = Backbone.View.extend({
    initialize: function(){
      this.model.on('active:change',this.markActive,this);
    },
    markActive: function(active) {
      this.$("li").removeClass("active");
      this.$("li."+active).addClass("active");
    }
  });
  return NavigationView;
})
