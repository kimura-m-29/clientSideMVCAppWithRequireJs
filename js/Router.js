define(function() {
    var routes = {'list' : {hash:'#list', controller:'ListController'},
        'add':{hash:'#add', controller:'AddController'}};
    var defaultRoute = '#list';

    function startRouting() {
        window.location.hash = window.location.hash || defaultRoute;
        hashCheck();
        bindEvents();
    }

    function bindEvents() {
        window.addEventListener('hashchange', function() {
            hashCheck();
        }, false);
    }

    function hashCheck() {
        var currentHash = window.location.hash;

        for (var name in routes) {
            var currentRoute = routes[name];

            if (currentHash == currentRoute.hash) {
                loadController(currentRoute.controller);
                break;
            }
        }
    }

    function loadController(controllerName) {
        require(['Controllers/' + controllerName], function(controller) {
            controller.start();
        });
    }

    return {
        routes:routes,
        startRouting:startRouting
    };
});