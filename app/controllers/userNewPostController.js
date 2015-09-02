import {templateHandler} from 'templateHandler'
import {testDB} from 'testDB'
import User from 'user'
import Post from 'post'
import {controller} from 'controller'



function userNewPostController(userName, app){

    var selectedUser = User.current().attributes;

    if (selectedUser) {

        localStorage.setItem('blog',JSON.stringify({username: selectedUser.username, name: selectedUser.name}));

        controller.navbarController();
        templateHandler.loadDataTemplate('templates/user-new-post.html', '#template-container', selectedUser)

    } else {
        //console.log(window.location)
        window.location.hash = '#/login-please'
    }
}

export {userNewPostController}