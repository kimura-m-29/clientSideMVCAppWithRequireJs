/**
 * Created by JetBrains WebStorm.
 * User: kimuram
 * Date: 11/11/20
 * Time: 21:22
 * To change this template use File | Settings | File Templates.
 */
define(['Views/ListView'], function(ListView) {
    function start() {
        var users = JSON.parse(localStorage.users);
        ListView.render({users:users});
    }

    return {
        start : start
    };
});