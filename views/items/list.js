define([
    'jquery',
    'underscore',
    'backbone',
    'collections/items',
    'text!templates/items/list.html'
], function($, _, Backbone, ItemsCollection, itemListTemplate) {
    var ItemListView = Backbone.View.extend({
        el: $('#container'),
        initialize: function() {
            this.collection = new ItemsCollection();
            this.collection.add({ name: 'Sword from hell' });
            this.collection.add({ name: 'Mallet of Odin' });
            this.collection.add({ name: 'Shield of Panama' });
            this.collection.add({ name: 'Hi-Potion of doom' });
        },
        template: _.template(itemListTemplate),
        render: function() {
            this.$el.html(this.template({ items: this.collection.models }));
            return this;
        }
    });

    return ItemListView;
});
