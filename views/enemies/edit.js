define([
    'jquery',
    'underscore',
    'backbone',
    'models/enemy',
    'text!templates/enemies/edit.html'
], function($, _, Backbone, EnemyModel, enemyEditTemplate) {
    var EnemyEditView = Backbone.View.extend({
        el: $('#container'),
        initialize: function(options) {
            this.model = new EnemyModel({id: options.id});
            this.model.fetch();

            this.model.bind('change', this.render, this);
        },
        template: _.template(enemyEditTemplate),
        render: function() {
            this.$el.html(this.template({ data: this.model }));
            return this;
        }
    });

    return EnemyEditView;
});
