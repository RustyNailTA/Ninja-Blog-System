import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import Post from 'post'
import User from 'user'
import {controller} from 'controller'


function allUsersController() {
    User.getAllUsers().then(function (users) {
       // console.log(users)
        templateHandler.loadDataTemplate('templates/all-users.html', '#template-container', { users: users });
    }, function (err) {
        console.log(err);
    })
}

export {allUsersController}

