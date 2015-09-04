import {templateHandler} from 'templateHandler'
import Post from 'post'
import User from 'user'
import {controller} from 'controller'

function allUsersController() {
    User.getAllUsers().then(function (users) {
        templateHandler.loadDataTemplate('templates/all-users.html', '#template-container', { users: users });
    }, function (err) {
        console.log(err);
    })
}

export {allUsersController}

