define(['backbone','app/views/time','app/views/projects',
       'app/views/clients','jquery'],
       function(Backbone, TimeView, ProjectsView, ClientsView,$){
  var Router = Backbone.Router.extend({
    routes: {
    'clients': 'showClients',
    'projects': 'showProjects',
    'time' : 'showTime'
    },
    closeCurrentView: function() {
      if(this.currentView) {
        this.currentView.remove();
      }
    },
    showTime: function() {
      this.closeCurrentView();
      this.currentView = new TimeView();
      $(".main.container").html(this.currentView.render());
      this.trigger("active:change",'time');
    },
    showProjects: function() {
      this.closeCurrentView();
      this.currentView = new ProjectsView();
      $(".main.container").html(this.currentView.render());
      this.trigger("active:change",'projects');
    },
    showClients: function() {
      this.closeCurrentView();
      this.currentView = new ClientsView({collection: window.clients});
      $(".main.container").html(this.currentView.render());
      this.trigger("active:change",'clients');
    }
  });
  return Router;
})
