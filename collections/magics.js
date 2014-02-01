define([
    'underscore',
    'backbone',
    'models/magic'
], function(_, Backbone, MagicModel) {
    var MagicCollection = Backbone.Collection.extend({
        model: MagicModel
    });

    return MagicCollection;
});
