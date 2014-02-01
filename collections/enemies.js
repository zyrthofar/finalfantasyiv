// Enemy collection
define([
    'underscore',
    'backbone',
    'models/enemy'
], function(_, Backbone, EnemyModel) {
    var EnemyCollection = Backbone.Collection.extend({
        url: 'http://127.0.0.1:1337/api/enemies/',
        model: EnemyModel
    });

    return EnemyCollection;
});
