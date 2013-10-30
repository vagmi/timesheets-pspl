define(['backbone','app/models/client'],function(Backbone,Client){
  var Clients = Backbone.Collection.extend({
    model: Client,
  });
  return Clients;
})
