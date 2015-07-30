app = app || {};

app.models.File = Backbone.Model.extend({
  defaults: {
    "Audio Files": '',
    "PDF Files": '',
    "Youtube link": ''
  }
});

app.collections.File = Backbone.Collection.extend({

  model: app.models.File

});
