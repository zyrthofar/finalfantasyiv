define([
    'jquery',
    'underscore',
    'backbone',
    'collections/magics',
    'text!templates/magics/list.html'
], function($, _, Backbone, MagicsCollection, magicListTemplate) {
    var MagicListView = Backbone.View.extend({
        el: $('#container'),
        initialize: function() {
            this.collection = new MagicsCollection();
            this.collection.add({ name: 'Fires from the Sun' });
            this.collection.add({ name: 'Colder than Io' });
            this.collection.add({ name: 'Curaga' });
            this.collection.add({ name: 'Meteo and Flare mixed together' });
        },
        template: _.template(magicListTemplate),
        render: function() {
            this.$el.html(this.template({ magics: this.collection.models }));
            return this;
        }
    });

    return MagicListView;
});
