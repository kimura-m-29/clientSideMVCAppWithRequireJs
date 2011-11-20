define(['Views/AddView', 'Models/User', 'Router'], function(AddView, User, Router) {
    function start() {
        AddView.render();
        bindEvents();
    }

    function bindEvents() {
        document.getElementById('add').addEventListener('click', function() {
            var userName = document.getElementById('user-name').value;
            var users = JSON.parse(localStorage.users);
            users.push(new User(userName));
            localStorage.users = JSON.stringify(users);
            window.location.hash = Router.routes.list.hash;
        }, false);
    }

    return {
        start:start
    };
});