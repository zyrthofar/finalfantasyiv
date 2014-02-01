define([
    'jquery',
    'underscore',
    'backbone',
    'collections/enemies',
    'text!templates/enemies/list.html'
], function($, _, Backbone, EnemiesCollection, enemyListTemplate) {
    var EnemyListView = Backbone.View.extend({
        el: $('#container'),
        template: _.template(enemyListTemplate),

        initialize: function() {
            this.collection = new EnemiesCollection();
            this.collection.fetch({
                reset: true
            });

            this.collection.bind("add", this.addEnemy, this);
            this.collection.bind("remove", this.removeEnemy, this);
            this.collection.bind("change", this.changeEnemy, this);
            this.collection.bind("reset", this.render, this);
        },

        render: function() {
            this.$el.html(this.template({ enemies: this.collection.models }));
            return this;
        },

        addEnemy: function() {

        },

        removeEnemy: function() {

        },

        changeEnemy: function() {

        }
    });

    return EnemyListView;
});
