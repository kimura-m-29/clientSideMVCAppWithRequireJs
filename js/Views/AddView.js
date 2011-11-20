define(function(){
   function render(){
       var appDiv = document.getElementById('app');
       appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>'
   }

    return {
        render:render
    };
});