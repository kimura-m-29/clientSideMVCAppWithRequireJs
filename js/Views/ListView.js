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