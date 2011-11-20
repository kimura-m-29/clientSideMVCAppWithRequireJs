/**
 * Created by JetBrains WebStorm.
 * User: kimuram
 * Date: 11/11/20
 * Time: 21:50
 * To change this template use File | Settings | File Templates.
 */
define(function(){
   function render(){
       var appDiv = document.getElementById('app');
       appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>'
   }

    return {
        render:render
    };
});