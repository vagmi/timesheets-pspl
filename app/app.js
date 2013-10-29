;(function($){

  window.App = {};
  App.Client = Backbone.Model.extend({

  });
  App.Clients = Backbone.Collection.extend({
    model: App.Client,
  });


  App.ClientView = Backbone.View.extend({
    tagName: 'li',
    render: function(){
      this.$el.html("Client : " + this.model.get('name') + " at " + this.model.get('location'));
      return this.$el;
    }
  });

  App.ClientsView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(){
      this.collection.on('add',this.renderClient,this);
    },
    renderClient: function(model){
      var clientView =new App.ClientView({model: model});
      this.$el.append(clientView.render());
    },

    render: function(){
      this.collection.each(this.renderClient,this);
      return this.$el;
    }
  });

  window.renderClients = function(){
    window.clients = new App.Clients([{name: "PSPL", location: "Pune"},
                                     {name: "Reduce Data", location: "San Francisco"},
                                     {name: "Thoughtworks", location: "Chennai"}]);
    var clientsView = new App.ClientsView({collection: clients});
    $("#clients").append(clientsView.render());
    $("#add-client").click(function(){
      console.log("add called");
      var rf = window.clients.create({name: "Rails Factory", location: "Chennai"});
      window.clients.add(rf);
      return false;
    });
  };

  window.timeEntries = [];
  var setupRouter = function() {
    $("ul.main-nav li a").click(function(){
      $("ul.main-nav li").removeClass("active");
      var $link = $(this);
      $link.parent().addClass("active");
      var sectionId = $link.attr("class");
      $("section.main-section").hide();
      $("section#"+sectionId).show();
      return false;
    });
    $("ul.main-nav li a.time").click();
  };
  $(function(){
    setupRouter();
    renderClients();
  });
})(jQuery);
