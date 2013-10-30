define(['backbone','jquery','underscore','text!templates/projects.ejs']
      ,function(Backbone,$,_,projectsTemplate){
  var ProjectsView = Backbone.View.extend({
    tagName: 'section',
    template: _.template(projectsTemplate),
    render: function(){
      this.$el.html(this.template());
      return this.$el;
    }
  });
  return ProjectsView;
})
