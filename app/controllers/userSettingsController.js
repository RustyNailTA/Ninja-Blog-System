import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'


function userSettingsController(userName, app){
  var selectedUser = User.current().attributes;

    if (selectedUser) {
        templateHandler.loadDataTemplate('templates/user-settings.html', '#template-container', selectedUser)

    } else {
         //console.log(window.location)
        window.location.hash = '#/login-please'
    }
}

export {userSettingsController}