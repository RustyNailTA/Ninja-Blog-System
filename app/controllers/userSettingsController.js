import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import {controller} from 'controller'



function userSettingsController(userName, app){


  var selectedUser = null;

    if(User.current()){
        selectedUser = User.current().attributes;
    }

    if (selectedUser) {
        localStorage.setItem('blog',JSON.stringify({username: selectedUser.username, name: selectedUser.name}));
        controller.navbarController();

        templateHandler.loadDataTemplate('templates/user-settings.html', '#template-container', selectedUser)

    } else {
         //console.log(window.location)
        window.location.hash = '#/login-please'
    }
}

export {userSettingsController}