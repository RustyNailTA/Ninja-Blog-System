import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'

function userSettingsController(userName, app){
  //  var selectedUser = JSON.parse(localStorage.getItem('Parse/by6R7kv1sgAk4lRHRQHZkSGogK9ow8JdZAcLNk55/currentUser'));

    var selectedUser = _.find(testDB.users, function (user) {
        return user.username === userName;
    });

    if (selectedUser) {
        templateHandler.loadDataTemplate('templates/user-settings.html', '#template-container', selectedUser)

    } else {

         console.log(window.location)
        window.location.hash = '#/login-please'
    }

}

export {userSettingsController}