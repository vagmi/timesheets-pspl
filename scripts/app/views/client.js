define(['backbone','jquery','underscore',
        'text!templates/clients/show.ejs',
        'text!templates/clients/edit.ejs'],
        function(Backbone, $,_,showClient, editClient) {
  var ClientView = Backbone.View.extend({
    tagName: 'li',
    events: {
      "click a.edit" : 'editClient',
      "submit form" : 'saveClient',
      "click button.save": 'saveClient'
    },
    viewTemplate: _.template(showClient),
    editTemplate: _.template(editClient),
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
  return ClientView;
});
