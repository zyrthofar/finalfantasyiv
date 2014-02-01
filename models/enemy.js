// Enemy model
define([
    'underscore',
    'backbone',
    'collections/enemies'
], function(_, Backbone, EnemyCollection) {
    var EnemyModel = Backbone.Model.extend({
        defaults: {
            name: "Enemy"
        },
        urlRoot: 'http://127.0.0.1:1337/api/enemies/'
    });

    return EnemyModel;
});
