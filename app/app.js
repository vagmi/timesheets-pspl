;(function($){

  window.App = {};
  App.Client = Backbone.Model.extend({

  });
  App.Clients = Backbone.Collection.extend({
    model: App.Client,
  });


  App.ClientView = Backbone.View.extend({
    tagName: 'li',
    events: {
      "click a.edit" : 'editClient',
      "submit form" : 'saveClient',
      "click button.save": 'saveClient'
    },
    viewTemplate: _.template($("#clientTemplate").text()),
    editTemplate: _.template($("#editClientTemplate").text()),
    editClient: function(){
      this.model.editMode=true;
      this.render();
      return false;
    },
    saveClient: function() {
      var name = this.$("input[name=name]").val();
      var location = this.$("input[name=location]").val();
      this.model.set('name',name);
      this.model.set('location',location);
      this.model.editMode=false;
      this.render();
      return false;
    },
    render: function(){
      var tmpl = this.viewTemplate;
      if(this.model.editMode) {
        tmpl = this.editTemplate;
      }
      this.$el.html(tmpl({model: this.model.attributes}));
      return this.$el;
    }
  });
  App.ClientsView = Backbone.View.extend({
    tagName: 'section',
    template: _.template($("#clientsTemplate").text()),
    events : {
      'click button.add-client' : 'addClient'
    },
    initialize: function(){
      this.collection.on('add',this.renderClient,this);
    },
    addClient: function() {
      var m = this.collection.create({name: "Rails Factory", location: "Chennai"});
      this.collection.add(m);
    },
    renderClient: function(model){
      var clientView =new App.ClientView({model: model});
      this.$("ul").append(clientView.render());
    },

    render: function(){
      this.$el.append($(this.template()));
      this.collection.each(this.renderClient,this);
      return this.$el;
    }
  });
  App.TimeView = Backbone.View.extend({
    tagName: 'section',
    template: _.template($("#timeTemplate").text()),
    render: function(){
      this.$el.html(this.template());
      return this.$el;
    }
  });
  App.ProjectsView = Backbone.View.extend({
    tagName: 'section',
    template: _.template($("#projectsTemplate").text()),
    render: function(){
      this.$el.html(this.template());
      return this.$el;
    }
  });

  App.Router = Backbone.Router.extend({
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
      this.currentView = new App.TimeView();
      $(".main.container").html(this.currentView.render());
      this.trigger("active:change",'time');
    },
    showProjects: function() {
      this.closeCurrentView();
      this.currentView = new App.ProjectsView();
      $(".main.container").html(this.currentView.render());
      this.trigger("active:change",'projects');
    },
    showClients: function() {
      this.closeCurrentView();
      this.currentView = new App.ClientsView({collection: window.clients});
      $(".main.container").html(this.currentView.render());
      this.trigger("active:change",'clients');
    }
  });
  App.NavigationView = Backbone.View.extend({
    initialize: function(){
      this.model.on('active:change',this.markActive,this);
    },
    markActive: function(active) {
      this.$("li").removeClass("active");
      this.$("li."+active).addClass("active");
    }
  });
  $(function(){
    window.clients = new App.Clients([{name: "PSPL", location: "Pune"},
                                     {name: "Reduce Data", location: "San Francisco"},
                                     {name: "Thoughtworks", location: "Chennai"}]);

    App.routerObject = new App.Router();
    App.navigation = new App.NavigationView({model: App.routerObject, el: $("ul.nav.navbar-nav.main-nav")});
    Backbone.history.start();
  });


})(jQuery);
