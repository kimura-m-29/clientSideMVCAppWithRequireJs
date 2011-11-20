require(['Models/User', 'Router'], function(User, Router) {
    if (!localStorage.users) {
        localStorage.users = JSON.stringify([new User('Barney'), new User('Cartman'), new User('Sheldon')]);
    }

    Router.startRouting();
});