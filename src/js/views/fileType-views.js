app = app || {};

app.views.File = Backbone.View.extend({
  tagName: 'li'

  attributes: function() {
    return {
      class: 'file' + this.model.get('type')
    };
  },
  template: _.template($('#file-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return.this;

  },

});

app.views.Files = Backbone.View.extend({

  el: '#wrapper',

  initialize: function(data) {
    this.collection = new app.collections.Files(data);
    this.render();
  },

  render: function() {
    var type = this;
    $('#listing').empty();
    _.each(this.colllection.models, function(file) {
      type.renderFile(file);
    }, this);
  },

  renderFile: function(file) {
    var newfile = new app.views.File({
      model: file
    });
    $('#listing').append(newfile.render().el);
  }
})
