;(function($){

  window.App = {};
  App.Client = Backbone.Model.extend({

  });
  App.Clients = Backbone.Collection.extend({
    model: App.Client,
  });


  App.ClientView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("#clientTemplate").text()),
    render: function(){
      this.$el.html(this.template({model: this.model.attributes}));
      return this.$el;
    }
  });

  App.ClientsView = Backbone.View.extend({
    tagName: 'section',
    attributes: {id: "clients", class: "main-section", style: "display: none"},
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
      //this.$("button.add-client").click(this.addClient);
      this.collection.each(this.renderClient,this);
      return this.$el;
    }
  });

  window.renderClients = function(){
    window.clients = new App.Clients([{name: "PSPL", location: "Pune"},
                                     {name: "Reduce Data", location: "San Francisco"},
                                     {name: "Thoughtworks", location: "Chennai"}]);
    var clientsView = new App.ClientsView({collection: clients});

    $(".main.container").append(clientsView.render());
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
