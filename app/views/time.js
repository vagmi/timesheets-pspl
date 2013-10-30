define(['backbone','jquery','underscore', 'text!templates/time.ejs'],
       function(Backbone, $,_, timeTemplate){
  var TimeView = Backbone.View.extend({
    tagName: 'section',
    template: _.template(timeTemplate),
    render: function(){
      this.$el.html(this.template());
      return this.$el;
    }
  });
  return TimeView;

});

