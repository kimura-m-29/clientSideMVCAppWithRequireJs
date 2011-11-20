/**
 * Created by JetBrains WebStorm.
 * User: kimuram
 * Date: 11/11/20
 * Time: 20:56
 * To change this template use File | Settings | File Templates.
 */
define(function(){
    function User(name){
        this.name = name || 'Default name';
    };

    return User;
});