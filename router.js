define([
    'jquery',
    'underscore',
    'backbone',
    'views/enemies/list',
    'views/enemies/edit',
    'views/items/list',
    'views/magics/list'
], function($, _, Backbone, EnemyListView, EnemyEditView, ItemListView, MagicListView){
    var AppRouter = Backbone.Router.extend({
        routes: {

            'enemies': 'showEnemies',
            'enemies/:id': 'showEnemy',

            'items': 'showItems',
            'items/:id': 'showItem',

            'magics': 'showMagics',

            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var app_router = new AppRouter;

        app_router.on('route:showEnemies', function() {
            var enemyListView = new EnemyListView();
            enemyListView.render();
        });

        app_router.on('route:showEnemy', function(id) {
           var enemyView = new EnemyEditView({ id: id });
            enemyView.render();
        });

        app_router.on('route:showItems', function() {
            var itemListView = new ItemListView();
            itemListView.render();
        });

        app_router.on('route:showMagics', function() {
            var magicListView = new MagicListView();
            magicListView.render();
        });

        app_router.on('route:defaultAction', function(actions) {
            console.log('No route:', actions);
        });

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
