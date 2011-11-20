/**
 * Created by JetBrains WebStorm.
 * User: kimuram
 * Date: 11/11/20
 * Time: 20:55
 * To change this template use File | Settings | File Templates.
 */
require(['Models/User', 'Router'], function(User, Router) {
    if (!localStorage.users) {
        localStorage.users = JSON.stringify([new User('Barney'), new User('Cartman'), new User('Sheldon')]);
    }

    Router.startRouting();
});