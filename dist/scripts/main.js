require.config({
    paths: {
        jquery     : '../bower_components/jquery/dist/jquery',
        foundation : '../bower_components/foundation/js/foundation'
    },

    shim : {
        'foundation' : {
            deps: ['jquery']
        }
    }
});

require(['app', 'jquery', 'foundation'], function (app, jQuery) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', jQuery().jquery);
    jQuery(document).foundation();
});
