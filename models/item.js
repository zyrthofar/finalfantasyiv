define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var ItemModel = Backbone.Model.extend({
        defaults: {
            name: "Item"
        }
    });

    return ItemModel;
});
