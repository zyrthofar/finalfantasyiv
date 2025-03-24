require.config({

    paths: {
        jquery: 'libs/jquery-2.0.3-min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min'
    }

});

// This is a require.
require([
    'app'
], function(App) {
    App.initialize();
});
