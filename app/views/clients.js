define(['backbone','jquery','underscore',
       'app/views/client','text!templates/clients.ejs'],
       function(Backbone,$,_,ClientView,clientsTemplate) {
  var ClientsView = Backbone.View.extend({
    tagName: 'section',
    template: _.template(clientsTemplate),
    events : {
      'click button.add-client' : 'addClient'
    },
    initialize: function(){
      this.collection.on('add',this.renderClient,this);
    },
    addClient: function() {
      var m = this.collection.create({name: "Rails Factory",
                                     location: "Chennai"});
      this.collection.add(m);
    },
    renderClient: function(model){
      var clientView =new ClientView({model: model});
      this.$("ul").append(clientView.render());
    },

    render: function(){
      this.$el.append($(this.template()));
      this.collection.each(this.renderClient,this);
      return this.$el;
    }
  });
  return ClientsView;
});
