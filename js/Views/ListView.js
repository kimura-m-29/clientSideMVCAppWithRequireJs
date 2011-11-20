/**
 * Created by JetBrains WebStorm.
 * User: kimuram
 * Date: 11/11/20
 * Time: 21:25
 * To change this template use File | Settings | File Templates.
 */
define(function() {
    function render(parameters) {
        var appDiv = document.getElementById('app');
        var users = parameters.users;
        var html = '<ul>';

        for(var i = 0, user; user = users[i]; ++i){
            html += '<li>' + user.name +'</li>';
        }

        html += '</ul>';

        appDiv.innerHTML = html;
    }

    return {
        render:render
    };
});