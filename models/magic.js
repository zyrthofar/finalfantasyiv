define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var MagicModel = Backbone.Model.extend({
        defaults: {
            name: "Magic"
        }
    });

    return MagicModel;
});
